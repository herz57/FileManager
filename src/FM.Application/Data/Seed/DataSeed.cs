using FM.Application.Domain.Entities;
using FM.FileService.Data;
using Microsoft.AspNetCore.Identity;
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
            var userManager = provider.GetRequiredService<UserManager<User>>();
            if (!userManager.Users.Any())
            {
                User vasya = new User
                {
                    UserName = "Vasya"
                };

                User vitya = new User
                {
                    UserName = "Vitya"
                };

                await userManager.CreateAsync(vasya, "Pass123$");
                await userManager.CreateAsync(vitya, "Pass123$");
            }
        }
    }
}

