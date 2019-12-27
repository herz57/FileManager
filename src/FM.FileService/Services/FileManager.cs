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
using System.Linq.Expressions;
using FM.FileService.Enums;
using FM.FileService.Data.Specification.FileSpecification;
using FM.Common.Extensions;
using FM.Common.DataAccess.Interfaces;
using FM.FileService.Filters;
using FM.FileService.Domain.DTOs;
using FM.FileService.Extensions;
using FM.FileService.DataAccess;

namespace FM.FileService.Services
{
    public class FileManager
    {
        private IWebHostEnvironment _appEnvironment;
        private readonly FileDbContext _context;
        private readonly UnitOfWork _unitOfWork;

        public FileManager(IWebHostEnvironment appEnvironment, 
            FileDbContext context,
            UnitOfWork unitOfWork)
        {
            _appEnvironment = appEnvironment;
            _context = context;
            _unitOfWork = unitOfWork;
        }

        public async Task<FileUploadResult> AddFilesToDiscAsync(List<IFormFile> uploadFiles, string directoryPath, long size)
        {
            string filePath;

            if (!Directory.Exists(directoryPath))
            {
                Directory.CreateDirectory(directoryPath);
            }

            foreach (var fileToUpload in uploadFiles)
            {
                filePath = string.Format("{0}{1}{2}", directoryPath, Path.DirectorySeparatorChar, fileToUpload.FileName);

                if (File.Exists(filePath))
                {
                    return new FileUploadResult
                    {
                        IsSuccess = false,
                        Message = $"File {fileToUpload.FileName} has already exists."
                    };
                }
            }

            foreach (var fileToUpload in uploadFiles)
            {
                filePath = string.Format("{0}{1}{2}", directoryPath, Path.DirectorySeparatorChar, fileToUpload.FileName);

                using (var fileStream = new FileStream(_appEnvironment.WebRootPath + filePath, FileMode.Create))
                {
                    await fileToUpload.CopyToAsync(fileStream);
                }
            }

            return new FileUploadResult
            {
                IsSuccess = true,
                Count = uploadFiles.Count,
                Size = size
            };
        }

        public async Task AddFilesToDbAsync(List<IFormFile> uploadFiles, string userId, string path)
        {
            foreach (var fileToRecord in uploadFiles)
            {
                FileEntity file = new FileEntity
                {
                    Name = fileToRecord.FileName,
                    Path = string.Format("{0}{1}{2}", path, Path.DirectorySeparatorChar, fileToRecord.FileName),
                    UserId = userId,
                    Size = fileToRecord.Length / 1024
                };

                await _unitOfWork.FileRepository.CreateAsync(file);
            }
        }

        public async Task AddUserFilesSizeAsync(FilesSizeForUserEntity userFilesSize, string userId, long size)
        {
            if (userFilesSize == null)
            {
                FilesSizeForUserEntity filesSizeForUserEntity = new FilesSizeForUserEntity
                {
                    UserId = userId,
                    FilesSize = size
                };

                await _unitOfWork.FilesSizeForUserEntity.CreateAsync(filesSizeForUserEntity);
            }
            else
            {
                var userFilesSizeItem = userFilesSize;
                userFilesSizeItem.FilesSize += size;
                _unitOfWork.FilesSizeForUserEntity.Update(userFilesSizeItem);
            }
        }

        public async Task<int> FilesDeletionAsync(Guid[] fileIds, string userId)
        {
            FileEntity[] files = new FileEntity[fileIds.Length];
            var checkFilesResult = await FilesDeletingCheckAsync(fileIds, userId, files);

            if (checkFilesResult != 0)
            {
                return checkFilesResult;
            }

            foreach (var file in files)
            {
                if (File.Exists(file.Path))
                {
                    File.Delete(file.Path);
                }

                _unitOfWork.FileRepository.Delete(file.Id);
                var histories = await _unitOfWork.FileReadHistoryRepository.GetAsync(p => p.FileId == file.Id);
                _unitOfWork.FileReadHistoryRepository.DeleteRange(histories);
            }

            await DeleteUserFilesSizeAsync(files, userId);
            return checkFilesResult;
        }

        private async Task<int> FilesDeletingCheckAsync(Guid[] fileIds, string userId, FileEntity[] files)
        {
            int i = 0;

            foreach (var fileId in fileIds)
            {
                files[i] = await _unitOfWork.FileRepository.FindAsync(fileId);

                if (files[i] == null)
                {
                    return StatusCodes.Status404NotFound;
                }

                if (files[i].UserId != userId)
                {
                    return StatusCodes.Status403Forbidden;
                }

                i++;
            }
            return 0;
        }

        private async Task DeleteUserFilesSizeAsync(FileEntity[] files, string userId)
        {
            long size = files.Sum(f => f.Size);
            var userFilesSize = (await _unitOfWork.FilesSizeForUserEntity.GetAsync(f => f.UserId == userId)).FirstOrDefault();

            userFilesSize.FilesSize -= size;
            _unitOfWork.FilesSizeForUserEntity.Update(userFilesSize);
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

            FileFilterSpecification<FileEntity> fileFilterSpecification = new FileFilterSpecification<FileEntity>(criterias, 
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

        public async Task<IReadOnlyList<FileReadHistoryEntity>> GetFileHistoriesAsync(Guid fileId, 
            int pageIndex,
            int itemsPage)
        {
            FileFilterSpecification<FileReadHistoryEntity> fileHistoryFilterSpecification = 
                    new FileFilterSpecification<FileReadHistoryEntity>(f => f.FileId == fileId,
                    itemsPage * pageIndex,
                    itemsPage);

            var result = await ApplySpecification(fileHistoryFilterSpecification).ToArrayAsync();
            return result;
        }

        private IQueryable<T> ApplySpecification<T>(ISpecification<T> spec) where T : class, IEntity<Guid>
        {
            return SpecificationEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(), spec);
        }
    }
}
