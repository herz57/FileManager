using FM.Application.Domain.Entities;
using FM.FileService.Data;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.DependencyInjection;
using STP.Identity.Application;
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

            var context = provider.GetRequiredService<ConfigurationDbContext>();

            if (!await context.Clients.AnyAsync())
            {
                foreach (var client in Config.GetClients())
                {
                    await context.Clients.AddAsync(client.ToEntity());
                }
                await context.SaveChangesAsync();
            }

            if (!await context.IdentityResources.AnyAsync())
            {
                foreach (var resource in Config.GetIdentityResources())
                {
                    await context.IdentityResources.AddAsync(resource.ToEntity());
                }
                await context.SaveChangesAsync();
            }

            if (!await context.ApiResources.AnyAsync())
            {
                foreach (var resource in Config.GetApis())
                {
                    await context.ApiResources.AddAsync(resource.ToEntity());
                }
                await context.SaveChangesAsync();
            }
        }
    }
}

