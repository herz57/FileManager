using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FM.FileService.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FM.FileService.Data.EntityConfigurations
{
    public class FileReadHistoryEntityConfiguration : IEntityTypeConfiguration<FileReadHistoryEntity>
    {
        public void Configure(EntityTypeBuilder<FileReadHistoryEntity> builder)
        {
            builder.HasKey(p => p.Id);

            builder
                .HasOne(f => f.File)
                .WithMany(f => f.FileReadHistories)
                .HasForeignKey(f => f.FileId);

            builder.Property(d => d.Date)
                .HasDefaultValueSql("getdate()");
        }
    }
}
