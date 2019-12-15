using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FM.Application.Data;
using FM.FileService.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FM.FileService.Controllers
{
    [ApiController]
    [Route("api/file")]
    public class FileController : ControllerBase
    {
        public FileController()
        {
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok();
        }
    }
}
