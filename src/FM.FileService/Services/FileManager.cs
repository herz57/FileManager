using FM.FileService.Data;
using FM.FileService.Data.Specification.Interfaces;
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
using FM.Common.Extensions;
using FM.FileService.Domain.DTOs;

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

        public async Task<FileUploadResult> AddFileAsync(IFormFile uploadFile, string path)
        {
            if (uploadFile != null)
            {
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                path = string.Format("{0}{1}{2}", path, Path.DirectorySeparatorChar, uploadFile.FileName);

                if (File.Exists(path))
                {
                    return new FileUploadResult { 
                        IsSuccess = false,
                        Message = $"File {uploadFile.FileName} has already exists"
                    };
                }
               
                using (var fileStream = new FileStream(_appEnvironment.WebRootPath + path, FileMode.Create))
                {
                    await uploadFile.CopyToAsync(fileStream);
                }
                return new FileUploadResult { IsSuccess = true };
            }
            return new FileUploadResult
            {
                IsSuccess = false,
                Message = $"File {uploadFile.FileName} failed to upload"
            };
        }

        public async Task<IReadOnlyList<FileEntity>> GetFilesAsync(FileFilterDto fileFilterDto)
        {
            Expression<Func<FileEntity, object>> sortingColumnExp = null;
            Expression<Func<FileEntity, bool>> criterias = f => true;

            if (fileFilterDto.Filters != null)
            {
                if (fileFilterDto.Filters.Id != null)
                {
                    criterias = criterias.AndAlso(f => f.Id.ToString().Contains(fileFilterDto.Filters.Id));
                }
                if (fileFilterDto.Filters.Name != null)
                {
                    criterias = criterias.AndAlso(f => f.Name.Contains(fileFilterDto.Filters.Name));
                }
                if (fileFilterDto.Filters.Size != null)
                {
                    criterias = criterias.AndAlso(f => f.Size >= fileFilterDto.Filters.Size[0] 
                        && f.Size <= fileFilterDto.Filters.Size[1]);
                }
                if (fileFilterDto.Filters.UploadTime != null)
                {
                    criterias = criterias.AndAlso(f => f.UploadedTime >= fileFilterDto.Filters.UploadTime[0].ConvertToUtc()
                            && f.UploadedTime <= (fileFilterDto.Filters.UploadTime[1] + 1).ConvertToUtc());
                }
                if (fileFilterDto.Filters.AllowedAnonymous != null)
                {
                    criterias = criterias.AndAlso(f => f.AllowedAnonymous == fileFilterDto.Filters.AllowedAnonymous);
                }
            }

            FileFilterSpecification fileFilterSpecification = new FileFilterSpecification(criterias, 
                fileFilterDto.ItemsPage * fileFilterDto.PageIndex, 
                fileFilterDto.ItemsPage);

            if (fileFilterDto.SortingColumn != null)
            {
                switch (fileFilterDto.SortingColumn)
                {
                    case "Id":
                        sortingColumnExp = f => f.Id;
                        break;
                    case "Name":
                        sortingColumnExp = f => f.Name;
                        break;
                    case "UploadedTime":
                        sortingColumnExp = f => f.UploadedTime;
                        break;
                    case "Size":
                        sortingColumnExp = f => f.Size;
                        break;
                    case "AllowedAnonymous":
                        sortingColumnExp = f => f.AllowedAnonymous;
                        break;
                }
            }

            if (fileFilterDto.SortingMode == FileSortingMode.OrderBy)
            {
                fileFilterSpecification.ApplyOrderBy(sortingColumnExp);
            }
            else if (fileFilterDto.SortingMode == FileSortingMode.OrderByDescending)
            {
                fileFilterSpecification.ApplyOrderByDescending(sortingColumnExp);
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
