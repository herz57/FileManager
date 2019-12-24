using FM.FileService.Data;
using FM.FileService.Data.Specification.Interfaces;
using FM.FileService.DataAccess;
using FM.FileService.Domain.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FM.FileService.Filters;
using System.Linq.Expressions;
using FM.Common.Enums;
using FM.FileService.Data.Specification.FileSpecification;

namespace FM.FileService.Services
{
    public class FileManager
    {
        private IWebHostEnvironment _appEnvironment;
        private readonly FileDbContext _context;

        public FileManager(IWebHostEnvironment appEnvironment, FileDbContext context)
        {
            _appEnvironment = appEnvironment;
            _context = context;
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

        public async Task<IReadOnlyList<FileEntity>> GetFilesAsync(FileFilterDto fileFilterDto)
        {
            FileFilterSpecification fileFilterSpecification;
            Expression<Func<FileEntity, object>> exp = null;

            fileFilterSpecification =
                new FileFilterSpecification(null, fileFilterDto.ItemsPage * fileFilterDto.PageIndex, fileFilterDto.ItemsPage);
            

            switch (fileFilterDto.OrderingColumn)
            {
                case "Id":
                    exp = f => f.Id;
                    break;
                case "Name":
                    exp = f => f.Name;
                    break;
                case "UploadedTime":
                    exp = f => f.UploadedTime;
                    break;
                case "Size":
                    exp = f => f.Size;
                    break;
                case "AllowedAnonymous":
                    exp = f => f.AllowedAnonymous;
                    break;
            }

            if (fileFilterDto.OrderingMode == FileOrderingMode.OrderBy)
            {
                fileFilterSpecification.ApplyOrderBy(exp);
            }
            else if (fileFilterDto.OrderingMode == FileOrderingMode.OrderByDescending)
            {
                fileFilterSpecification.ApplyOrderByDescending(exp);
            }

            var result = await ApplySpecification(fileFilterSpecification).ToArrayAsync();
            return result;
        }

        private IQueryable<FileEntity> ApplySpecification(ISpecification<FileEntity> spec)
        {
            return SpecificationEvaluator<FileEntity>.GetQuery(_context.Set<FileEntity>().AsQueryable(), spec);
        }
    }
}
