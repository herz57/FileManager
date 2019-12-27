using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using FluentValidation.AspNetCore;
using FM.Common.Options;
using FM.FileService.Data;
using FM.FileService.Data.Seed;
using FM.FileService.DataAccess;
using FM.FileService.Filters;
using FM.FileService.Infrastructure.Validation;
using FM.FileService.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace FM.FileService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            _oauthOptions = new OAuthOptions();
            Configuration.GetSection(nameof(OAuthOptions)).Bind(_oauthOptions);
        }

        public IConfiguration Configuration { get; }
        protected OAuthOptions _oauthOptions { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddMvc(option => option.EnableEndpointRouting = false)
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddFluentValidation();

            services.AddTransient<IValidator<FileFilterDto>, FileFilterDtoValidator>();

            services.AddTransient<IValidator<List<IFormFile>>, FormFileListValidator>();

            var connectionString = Configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<FileDbContext>(options =>
                options.UseSqlServer(connectionString));

            services.AddScoped<UnitOfWork>();

            services.AddScoped<FileManager>();

            services.AddAutoMapper(typeof(Startup));

            services
                .AddControllersWithViews()
                .AddNewtonsoftJson();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.Authority = _oauthOptions.AuthServer;
                options.Audience = _oauthOptions.ApiName;
                options.RequireHttpsMetadata = false;
            });

            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options
                    .WithOrigins("http://localhost:4200")
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
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseMvc();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                scope.ServiceProvider.GetRequiredService<FileDbContext>().Database.Migrate();
                DataSeed.EnsureDataSeed(scope.ServiceProvider).ConfigureAwait(false).GetAwaiter().GetResult();
            }
        }
    }
}
