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

        public async Task<bool> AddFileAsync(IFormFile uploadFile)
        {
            if (uploadFile != null)
            {
                string path = string.Format("..{0}FM.FileService{0}Files{0}{1}", Path.DirectorySeparatorChar, uploadFile.FileName);
                using (var fileStream = new FileStream(_appEnvironment.WebRootPath + path, FileMode.Create))
                {
                    await uploadFile.CopyToAsync(fileStream);
                }
                return true;
            }
            return false;
        }
    }
}
