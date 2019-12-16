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

namespace FM.FileService.Controllers
{
    [ApiController]
    [Route("api/file")]
    public class FileController : ControllerBase
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly FileManager _fileManager;

        public FileController(UnitOfWork unitOfWork, FileManager fileManager)
        {
            _unitOfWork = unitOfWork;
            _fileManager = fileManager;
        }

        [HttpPost]
        public async Task<ActionResult<FileEntity>> AddFileAsync([FromForm(Name = "file")]IFormFile uploadedFile)
        {
            var isUpload = await _fileManager.AddFileAsync(uploadedFile);

            if (!isUpload)
            {
                return BadRequest();
            }

            FileEntity file = new FileEntity { Name = uploadedFile.FileName, Path = "../FM.FileService/Files/" + uploadedFile.FileName };
            var fileResult = await _unitOfWork.FileRepository.CreateAsync(file);
            await _unitOfWork.SaveChangesAsync();
            return fileResult;
        }

        [HttpGet("{fileName}")]
        public async Task<IActionResult> GetStream([FromRoute]string fileName)
        {
            FileEntity file = (await _unitOfWork.FileRepository.GetAsync(f => f.Name == fileName)).FirstOrDefault();

            if (file == null)
            {
                return NotFound();
            }

            FileStream fs = new FileStream(file.Path, FileMode.Open);
            return File(fs, $"application/{file.Extension}", file.Name);
        }
    }
}
