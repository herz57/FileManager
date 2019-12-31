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
using FM.FileService.Domain.DTOs;
using FM.FileService.Filters;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

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

        [Authorize]
        [HttpPost("{files}")]
        public async Task<ActionResult<FileDto[]>> GetFilesAsync([FromBody]FileFilterDto fileFilterDto)
        {
            var result = await _fileManager.GetFilesAsync(fileFilterDto, User.FindFirstValue(ClaimTypes.NameIdentifier));
            var mappedFiles = _mapper.Map<FileDto[]>(result);
            return mappedFiles;
        }

        [HttpGet("{fileId}")]
        public async Task<IActionResult> GetFileStreamByIdAsync([FromRoute]Guid fileId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

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
            return File(fs, $"application/{file.Extension}", file.Name);
        }

        [Authorize]
        [RequestSizeLimit(52_428_800)]
        [HttpPost]
        public async Task<IActionResult> AddFileAsync([FromForm(Name = "file")]List<IFormFile> uploadFiles)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userFilesSize = (await _unitOfWork.FilesSizeForUserEntity.GetAsync(f => f.UserId == userId)).FirstOrDefault();
            long size = uploadFiles.Sum(f => f.Length) / 1024;

            if (userFilesSize != null && (userFilesSize.FilesSize + size) > 102400)
            {
                return BadRequest("Size of files on the disk cannot exceed 100 mb. Please delete some files.");
            }

            string path = string.Format("..{0}FM.FileService{0}Files{0}{1}", Path.DirectorySeparatorChar, userId);
            
            var uploadFilesResult = await _fileManager.AddFilesToDiscAsync(uploadFiles, path, size);

            if (!uploadFilesResult.IsSuccess)
            {
                return BadRequest(uploadFilesResult.Message);
            }

            await _fileManager.AddFilesToDbAsync(uploadFiles, userId, path);

            await _fileManager.AddUserFilesSizeAsync(userFilesSize, userId, size);

            await _unitOfWork.SaveChangesAsync();

            return Ok("Files were uploaded");
        }

        [Authorize]
        [HttpPatch("{fileId}")]
        public async Task<IActionResult> PatchFile([FromBody]JsonPatchDocument<UpdateFileDto> filePatch,
            [FromRoute]Guid fileId)
        {
            var file = await _unitOfWork.FileRepository.FindAsync(fileId);
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

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

        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> DeleteFile([FromBody]Guid[] fileIds)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var filesDeletionResult = await _fileManager.FilesDeletionAsync(fileIds, userId);

            if (filesDeletionResult != 0)
            {
                return StatusCode(filesDeletionResult);
            }
           
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }
    }
}
