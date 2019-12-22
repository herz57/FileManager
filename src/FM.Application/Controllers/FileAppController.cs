using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using FM.Application.Domain.Entities;
using FM.Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FM.Application.Controllers
{
    [Route("api/fileapp")]
    [ApiController]
    public class FileAppController : Controller
    {
        private readonly InnerHttpClient _client;
        private readonly UserManager<User> _userManager;

        public FileAppController(InnerHttpClient client, UserManager<User> userManager)
        {
            _client = client;
            _userManager = userManager;
        }

        [Authorize]
        [HttpGet]
        public async Task<object> GetFilesAsync(int page = 0, int pageSize = 0)
        {
            var result = await _client.GetAsync(page, pageSize);
            return result;
        }

        [HttpGet("{fileId}")]
        public async Task<object> GetFileStreamByIdAsync([FromRoute]string fileId)
        {
            var user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier));
            string parameters = fileId;

            if (user != null)
            {
                parameters = Path.Combine(new string[] { fileId, user.Id });
            }

            var result = await _client.GetByIdAsync(parameters);
            return result;
        }

        //[HttpPost("{userId}")]
        //public async Task<ActionResult<FileDto>> AddFileAsync([FromForm(Name = "file")]IFormFile uploadFile, [FromRoute]string userId)
        //{

        //}

        //[HttpPatch("{userId}/{fileId}")]
        //public async Task<IActionResult> PatchFile([FromBody]JsonPatchDocument<UpdateFileDto> filePatch,
        //    [FromRoute]string userId,
        //    [FromRoute]Guid fileId)
        //{

        //}

        //[HttpDelete("{userId}/{fileId}")]
        //public async Task<IActionResult> DeleteFile([FromRoute]string userId, [FromRoute]Guid fileId)
        //{

        //}
    }
}