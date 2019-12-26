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
using Microsoft.AspNetCore.JsonPatch;
using AutoMapper;
using FM.Common.Domain.DTOs;
using FM.Common.Filters;

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

        [HttpPost]
        public async Task<ActionResult<FileDto[]>> GetFilesAsync([FromBody]FileFilterDto fileFilterDto)
        {
            var result = await _fileManager.GetFilesAsync(fileFilterDto);
            var mappedFiles = _mapper.Map<FileDto[]>(result);
            return mappedFiles;
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

            var fileReadHistoryEntity = new FileReadHistoryEntity
            {
                UserId = userId,
                FileId = file.Id
            };

            FileStream fs = new FileStream(file.Path, FileMode.Open);
            await _unitOfWork.FileReadHistoryRepository.CreateAsync(fileReadHistoryEntity);
            await _unitOfWork.SaveChangesAsync();
            Response.Headers.Add("filename", file.Name);
            return File(fs, $"application/{file.Extension}");
        }

        [HttpPost("{userId}")]
        public async Task<ActionResult<FileDto>> AddFileAsync([FromForm(Name = "file")]List<IFormFile> uploadFiles, [FromRoute]string userId)
        {
            string path = string.Format("..{0}FM.FileService{0}Files{0}{1}", Path.DirectorySeparatorChar, userId);
            var uploadFilesResult = await _fileManager.AddFileAsync(uploadFiles, path);

            if (!uploadFilesResult.IsSuccess)
            {
                return BadRequest(uploadFilesResult.Message);
            }

            foreach (var fileToRecord in uploadFiles)
            {
                FileEntity file = new FileEntity
                {
                    Name = fileToRecord.FileName,
                    Path = string.Format("{0}{1}{2}", path, Path.DirectorySeparatorChar, fileToRecord.FileName),
                    UserId = userId,
                    Size = fileToRecord.Length / 1024
                };

                await _unitOfWork.FileRepository.CreateAsync(file);
            }
            
            await _unitOfWork.SaveChangesAsync();

            return Ok(uploadFilesResult);
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

            if (System.IO.File.Exists(file.Path))
            {
                System.IO.File.Delete(file.Path);
            }

            _unitOfWork.FileRepository.Delete(file.Id);
            var files = await _unitOfWork.FileReadHistoryRepository.GetAsync(p => p.FileId == fileId);
            _unitOfWork.FileReadHistoryRepository.DeleteRange(files);
            await _unitOfWork.SaveChangesAsync();

            return Ok();
        }
    }
}
