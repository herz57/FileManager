using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FM.FileService.DataAccess;
using FM.FileService.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FM.FileService.Domain.Entities;
using FM.FileService.Domain.DTOs;
using Microsoft.AspNetCore.JsonPatch;
using AutoMapper;

namespace FM.FileService.Controllers
{
    [ApiController]
    [Route("api/file")]
    public class FileController : ControllerBase
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly FileManager _fileManager;
        private readonly IMapper _mapper;

        public FileController(UnitOfWork unitOfWork, FileManager fileManager, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _fileManager = fileManager;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<FileDto[]>> GetFilesAsync(int page = 1, int pageSize = 10)
        {
            var files = await _unitOfWork.FileRepository.GetAllAsync();
            var pageFiles = files.Skip((page - 1) * pageSize).Take(pageSize).ToArray();
            var mappedFiles = _mapper.Map<FileDto[]>(pageFiles);
            return Ok(mappedFiles);
        }

        [HttpGet("{fileId}/{userId?}")]
        public async Task<IActionResult> GetFileStreamByIdAsync([FromRoute]Guid fileId, [FromRoute]string userId = null)
        {
            FileEntity file = await _unitOfWork.FileRepository.FindAsync(fileId);

            if (file == null)
            {
                return NotFound();
            }

            if (!file.AllowedAnonymous && file.UserId != userId)
            {
                return StatusCode(403);
            }

            FileStream fs = new FileStream(file.Path, FileMode.Open);
            return File(fs, $"application/{file.Extension}", file.Name);
        }

        [HttpPost("{userId}")]
        public async Task<ActionResult<FileDto>> AddFileAsync([FromForm(Name = "file")]IFormFile uploadFile, [FromRoute]string userId)
        {
            var isUpload = await _fileManager.AddFileAsync(uploadFile);

            if (!isUpload)
            {
                return BadRequest();
            }

            FileEntity file = new FileEntity
            {
                Name = uploadFile.FileName,
                Path = string.Format("..{0}FM.FileService{0}Files{0}{1}", Path.DirectorySeparatorChar, uploadFile.FileName),
                UserId = userId,
                Size = uploadFile.Length / 1024
            };
            
            var fileResult = await _unitOfWork.FileRepository.CreateAsync(file);
            await _unitOfWork.SaveChangesAsync();
            var mapperFile = _mapper.Map<FileDto>(fileResult);
            return mapperFile;
        }

        [HttpPatch("{userId}/{fileId}")]
        public async Task<IActionResult> PatchFile([FromBody]JsonPatchDocument<UpdateFileDto> filePatch, 
            [FromRoute]string userId,
            [FromRoute]Guid fileId)
        {
            var file = await _unitOfWork.FileRepository.FindAsync(fileId);

            if (file == null)
            {
                return NotFound();
            }

            if (file.UserId != userId)
            {
                return StatusCode(403);
            }

            var fileDto = _mapper.Map<UpdateFileDto>(file);

            filePatch.ApplyTo(fileDto);

            TryValidateModel(fileDto);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _mapper.Map(fileDto, file);

            _unitOfWork.FileRepository.Update(file);
            await _unitOfWork.SaveChangesAsync();

            var mappedFile = _mapper.Map<FileDto>(file);

            return Ok(mappedFile);
        }

        [HttpDelete("{userId}/{fileId}")]
        public async Task<IActionResult> DeleteFile([FromRoute]string userId, [FromRoute]Guid fileId)
        {
            var file = await _unitOfWork.FileRepository.FindAsync(fileId);

            if (file == null)
            {
                return NotFound();
            }

            if (file.UserId != userId)
            {
                return StatusCode(403);
            }

            _unitOfWork.FileRepository.Delete(file.Id);
            var files = await _unitOfWork.FileReadHistoryRepository.GetAsync(p => p.FileId == fileId);
            _unitOfWork.FileReadHistoryRepository.DeleteRange(files);
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }
    }
}
