using FM.FileService.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Data.EntityConfigurations
{
    public class FilesSizeForUserEntityConfiguration : IEntityTypeConfiguration<FilesSizeForUserEntity>
    {
        public void Configure(EntityTypeBuilder<FilesSizeForUserEntity> builder)
        {
            builder.HasKey(p => p.Id);
            builder.HasAlternateKey(p => p.UserId);
            builder.Property(f => f.FilesSize).HasMaxLength(209715200).IsRequired();
        }
    }
}
