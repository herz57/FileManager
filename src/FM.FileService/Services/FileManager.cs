using FM.FileService.DataAccess;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Services
{
    public class FileManager
    {
        private IWebHostEnvironment _appEnvironment;

        public FileManager(IWebHostEnvironment appEnvironment)
        {
            _appEnvironment = appEnvironment;
        }

        public async Task<bool> AddFileAsync(IFormFile uploadedFile)
        {
            if (uploadedFile != null)
            {
                string path = "../FM.FileService/Files/" + uploadedFile.FileName;
                using (var fileStream = new FileStream(_appEnvironment.WebRootPath + path, FileMode.Create))
                {
                    await uploadedFile.CopyToAsync(fileStream);
                }
                return true;
            }
            return false;
        }
    }
}
