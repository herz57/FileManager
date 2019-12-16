using FM.FileService.Data;
using FM.FileService.Domain.Entities;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Data.Seed
{
    public static class DataSeed
    {
        public static async Task EnsureDataSeed(IServiceProvider provider)
        {
            var context = provider.GetRequiredService<FileDbContext>();
            if (!context.Files.Any())
            {
                FileEntity file = new FileEntity
                {
                    Name = "test.jpg",
                    Path = "../FM.FileService/Files/test.jpg",
                    CreateDate = DateTime.Now,
                    UserId = "test-id",
                    AllowedAnonymous = false
                };

                await context.Set<FileEntity>().AddAsync(file);
                await context.SaveChangesAsync();

                FileReadHistoryEntity fileReadHistory = new FileReadHistoryEntity
                {
                    FileId = 1,
                    UserId = "test-id2",
                    Date = DateTime.Now
                };

                await context.Set<FileReadHistoryEntity>().AddAsync(fileReadHistory);
                await context.SaveChangesAsync();
            }
        }
    }
}

