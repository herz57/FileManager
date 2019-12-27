using AutoMapper;
using FM.FileService.Domain.DTOs;
using FM.FileService.Services;
using Microsoft.AspNetCore.Authorization;
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
        private readonly IMapper _mapper;
        private readonly FileManager _fileManager;

        public FileReadHistoryController(IMapper mapper, FileManager fileManager)
        {
            _mapper = mapper;
            _fileManager = fileManager;
        }

        [Authorize]
        [HttpGet("{fileId}/{pageIndex?}/{itemsPage?}")]
        public async Task<ActionResult<FileReadHistoryDto[]>> GetFileReadHistoryAsync([FromRoute]Guid fileId, 
            [FromRoute]int pageIndex = 0,
            [FromRoute]int itemsPage = 10)
        {
            var histories = await _fileManager.GetFileHistoriesAsync(fileId, pageIndex, itemsPage);
            var mappedHistories = _mapper.Map<FileReadHistoryDto[]>(histories);
            return mappedHistories;
        }
    }
}
