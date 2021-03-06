﻿using FM.FileService.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Data.EntityConfigurations
{
    public class FileEntityConfiguration : IEntityTypeConfiguration<FileEntity>
    {
        public void Configure(EntityTypeBuilder<FileEntity> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(f => f.Name).HasMaxLength(200).IsRequired();
            builder.Property(f => f.AllowedAnonymous).IsRequired();
            builder.Property(d => d.UploadedTime)
                .HasDefaultValueSql("getdate()");
        }
    }
}
