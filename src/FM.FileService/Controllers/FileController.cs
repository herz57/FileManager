using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FM.FileService.DataAccess;
using FM.FileService.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FM.FileService.Controllers
{
    [ApiController]
    [Route("api/file")]
    public class FileController : ControllerBase
    {
        private readonly UnitOfWork _unitOfWork;
        public FileController(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult<File>> UploadFile([FromBody]File file)
        {
            var result = await _unitOfWork.FileRepository.CreateAsync(file);
            await _unitOfWork.SaveChangesAsync();
            return Ok(result);
        }
    }
}
