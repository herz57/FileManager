using AutoMapper;
using FM.Application.Domain.DTOs;
using FM.Application.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace FM.Application.Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CreateUserDto, User>();

            CreateMap<User, UserDto>();
        }
    }
}
