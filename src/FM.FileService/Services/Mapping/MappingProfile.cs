using AutoMapper;
using FM.Common.Extensions;
using FM.FileService.Domain.DTOs;
using FM.FileService.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace FM.FileService.Services.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<FileEntity, UpdateFileDto>();

            CreateMap<UpdateFileDto, FileEntity>();

            CreateMap<FileEntity, FileDto>()
                .ForMember(d => d.UploadedTime, w => w.MapFrom(u => DatetimeConverter.ConvertToUnix(u.UploadedTime)));

            CreateMap<FileDto, FileEntity>()
                .ForMember(d => d.UploadedTime, w => w.MapFrom(u => DatetimeConverter.ConvertToUtc(u.UploadedTime)));
        }
    }
}

