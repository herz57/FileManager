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
        public async Task<ActionResult<FilesResponseDto>> GetFilesAsync([FromBody]FileFilterDto fileFilterDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = await _fileManager.GetFilesAsync(fileFilterDto, userId);
            var mappedFiles = _mapper.Map<FileDto[]>(result);
            FilesResponseDto filesResponse = new FilesResponseDto
            {
                Files = mappedFiles
            };

            if (fileFilterDto.PageIndex == 1)
            {
                int filesCount = await _fileManager.GetFilesCount(fileFilterDto, userId);
                filesResponse.UserFilesLength = filesCount;
            }

            return filesResponse;
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
            long size = uploadFiles.Sum(f => f.Length);

            if ((await _unitOfWork.FileRepository.SumAsync(f => f.UserId == userId, c => c.Size)) > 102400000)
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

            await _unitOfWork.SaveChangesAsync();

            return Ok("Uploaded");
        }

        [Authorize]
        [HttpPut]
        public async Task<IActionResult> UpdateFile([FromBody]UpdateFileDto fileDto,
            [FromRoute]Guid fileId)
        {
            var file = await _unitOfWork.FileRepository.FindAsync(fileDto.Id);
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (file == null)
            {
                return NotFound();
            }

            if (file.UserId != userId)
            {
                return StatusCode(403);
            }

            file.AllowedAnonymous = fileDto.AllowedAnonymous;

            _unitOfWork.FileRepository.Update(file);
            await _unitOfWork.SaveChangesAsync();

            var mappedFile = _mapper.Map<FileDto>(file);

            return Ok(mappedFile);
        }

        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> DeleteFiles([FromBody]Guid[] fileIds)
        {
            if (fileIds == null)
            {
                return BadRequest();
            }

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var filesDeletionResult = await _fileManager.FilesDeletingAsync(fileIds, userId);

            if (filesDeletionResult != 0)
            {
                return StatusCode(filesDeletionResult);
            }
           
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }

        [Authorize]
        [HttpDelete("{userId}")]
        public async Task<IActionResult> Collect([FromRoute]string userId)
        {
            var _userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId != _userId)
            {
                return BadRequest("Invalid user id");
            }

            var files = await _unitOfWork.FileRepository.GetAsync(f => f.UserId == _userId);

            if (files.Length == 0)
            {
                return Ok();
            }

            await _fileManager.DeleteFromDbAsync(files);
            await _unitOfWork.SaveChangesAsync();

            string directoryPath = string.Format("..{0}FM.FileService{0}Files{0}{1}", Path.DirectorySeparatorChar, _userId);

            Directory.Delete(directoryPath, true);

            return Ok();
        }
    }
}
