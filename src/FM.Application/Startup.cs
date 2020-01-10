using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using FM.Application.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using FM.Application.Domain.Entities;
using IdentityServer4.EntityFramework.DbContexts;
using FM.FileService.Data.Seed;
using AutoMapper;
using System;
using FM.Application.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using FM.Common.Options;
using Microsoft.AspNetCore.Mvc;
using FluentValidation.AspNetCore;
using FluentValidation;
using FM.Application.Domain.DTOs;
using FM.Application.Infrastructure.Validation;
using FM.Application.Infrastructure;

namespace FM.Application
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        protected OAuthOptions _oauthOptions { get; set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            var baseUrl = Configuration[WebHostDefaults.ServerUrlsKey];
            Configuration.GetSection("OAuthOptions").GetSection("AuthServer").Value = baseUrl;

            _oauthOptions = new OAuthOptions();
            Configuration.GetSection(nameof(OAuthOptions)).Bind(_oauthOptions);
        }        

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("DefaultConnection");

            services.AddMvc(option => option.EnableEndpointRouting = false)
                .AddFluentValidation()
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.AddTransient<IValidator<CreateUserDto>, CreateUserValidator>();

            services.AddTransient<IValidator<ChangePasswordDto>, ChangePasswordValidator>();

            services.AddHttpClient<InnerHttpClient>("fileapi", c =>
            {
                c.BaseAddress = new Uri(Configuration.GetSection("ExternalApiUrls").GetSection("FileService").GetSection("FileApi").Value);
            });

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString));

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddUserManager<UserManager<User>>()
                .AddDefaultTokenProviders();

            services.AddIdentityServer(options =>
            {
                options.Events.RaiseErrorEvents = true;
                options.Events.RaiseInformationEvents = true;
                options.Events.RaiseFailureEvents = true;
                options.Events.RaiseSuccessEvents = true;
            })
            .AddDeveloperSigningCredential()
            .AddAspNetIdentity<User>()
            .AddConfigurationStore(options =>
            {
                options.ConfigureDbContext = b =>
                    b.UseSqlServer(connectionString,
                        sql => sql.MigrationsAssembly("FM.Application"));
            })
            .AddOperationalStore(options =>
            {
                options.ConfigureDbContext = b =>
                    b.UseSqlServer(connectionString,
                        sql => sql.MigrationsAssembly("FM.Application"));
                options.EnableTokenCleanup = true;
            });

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.Authority = "http://cc.filedriveservice.com:88";
                options.Audience = "identity";
                options.RequireHttpsMetadata = false;

            });

            // In production, the Angular files will be served from this directory

            services.AddAutoMapper(typeof(Startup));

            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("AllowOrigin");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseIdentityServer();
            app.UseAuthorization();
            
            app.UseMvc();

            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                scope.ServiceProvider.GetRequiredService<ApplicationDbContext>().Database.Migrate();
                scope.ServiceProvider.GetRequiredService<ConfigurationDbContext>().Database.Migrate();
                scope.ServiceProvider.GetRequiredService<PersistedGrantDbContext>().Database.Migrate();
                DataSeed.EnsureDataSeed(scope.ServiceProvider).ConfigureAwait(false).GetAwaiter().GetResult();
            }
        }
    }
}
