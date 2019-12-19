using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using FM.Application.Domain.DTOs;
using FM.Application.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FM.Application.Controllers
{
    [Route("api/users")]
    [Produces("application/json")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;

        public UserController(UserManager<User> userManager,
            IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        [Authorize]
        [HttpGet]
        public string Get()
        {
            var accessToken = Request.Headers["Authorization"];
            return "yjg";
        }

        [HttpPost]
        public async Task<ActionResult<UserDto>> CreateUser([FromBody]CreateUserDto userDto)
        {
            var mappedUser = _mapper.Map<User>(userDto);

            var result = await _userManager.CreateAsync(mappedUser, userDto.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            var user = await _userManager.FindByNameAsync(userDto.UserName);

            var responseUser = _mapper.Map<UserDto>(user);

            return Ok(responseUser);
        }
    }
}