using AutoMapper;
using FM.FileService.DataAccess;
using FM.FileService.Domain.DTOs;
using FM.FileService.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Controllers
{
    [ApiController]
    [Route("api/filehistory")]
    public class FileReadHistoryController : ControllerBase
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public FileReadHistoryController(UnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("{fileId}")]
        public async Task<ActionResult<FileReadHistoryDto[]>> GetFileReadHistoryAsync([FromRoute]Guid fileId)
        {
            var histories = await _unitOfWork.FileReadHistoryRepository.GetAsync(p => p.FileId == fileId);
            var mappedHistories = _mapper.Map<FileReadHistoryDto[]>(histories);
            return mappedHistories;
        }

        [HttpPost("{userId}/{fileId}")]
        public async Task<IActionResult> CreateFileReadOrder([FromRoute]string userId, [FromRoute]Guid fileId)
        {
            FileReadHistoryEntity fileReadOrder = new FileReadHistoryEntity
            {
                FileId = fileId,
                UserId = userId
            };

            await _unitOfWork.FileReadHistoryRepository.CreateAsync(fileReadOrder);
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }
    }
}
