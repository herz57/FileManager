using FM.FileService.Data;
using FM.FileService.Domain.Entities;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
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
                    Path = string.Format("..{0}FM.FileService{0}Files{0}test.jpg", Path.DirectorySeparatorChar),
                    UserId = "test-id"
                };

                await context.Set<FileEntity>().AddAsync(file);
                await context.SaveChangesAsync();
            }
        }
    }
}

