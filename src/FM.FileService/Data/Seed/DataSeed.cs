using FM.Application.Data;
using FM.FileService.Domain.Entities;
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

            File file = new File
            {
                Name = "test.jpg",
                Path = "../Files/",
                CreateDate = DateTime.Now,
                UserId = "test-id",
                AllowedAnonymous = true
            };

            await context.Set<File>().AddAsync(file);
            await context.SaveChangesAsync();

            FileReadHistory fileReadHistory = new FileReadHistory
            {
                FileId = 1,
                UserId = "test-id2",
                Date = DateTime.Now
            };
            
            await context.Set<FileReadHistory>().AddAsync(fileReadHistory);
            await context.SaveChangesAsync();
        }
    }
}

