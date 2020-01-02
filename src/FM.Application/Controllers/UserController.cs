using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using FM.Application.Domain.DTOs;
using FM.Application.Domain.Entities;
using FM.Application.Infrastructure;
using FM.Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace FM.Application.Controllers
{
    [Route("api/users")]
    [Produces("application/json")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        private readonly InnerHttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public UserController(UserManager<User> userManager,
            IMapper mapper,
            InnerHttpClient httpClient,
            IConfiguration configuration)
        {
            _userManager = userManager;
            _mapper = mapper;
            _httpClient = httpClient;
            _configuration = configuration;
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

        [Authorize]
        [HttpDelete("{password}")]
        public async Task<IActionResult> DeleteUser([FromRoute]string password)
        {
            var user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier));
            
            if (!await _userManager.CheckPasswordAsync(user, password))
            {
                return BadRequest();
            }

            await _userManager.DeleteAsync(user);
            var token = Request.Headers["Authorization"];
            var deleteFilesResult = await _httpClient.DeleteQuery(user.Id, token);

            if ((int)deleteFilesResult.StatusCode >= 400)
            {
                return BadRequest(deleteFilesResult.ReasonPhrase);
            }

            return Ok("Account has been deleted");
        }

        [Authorize]
        [HttpPut]
        public async Task<IActionResult> ChangePasswordUser([FromBody]ChangePasswordDto changePasswordDto)
        {
            string userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var user = await _userManager.FindByIdAsync(userId);

            var result = await _userManager.ChangePasswordAsync(user, changePasswordDto.CurrentPassword, changePasswordDto.NewPassword);

            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok("Password has been changed");
        }

        [HttpPost("forgotpass")]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword([FromBody]ForgotPasswordDto forgotPasswordDto)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(forgotPasswordDto.Email);
                if (user == null)
                {
                    return BadRequest("ForgotPasswordConfirmation");
                }

                var code = await _userManager.GeneratePasswordResetTokenAsync(user);

                EmailService emailService = new EmailService();

                var clientUrl = string.Format($"{_configuration.GetValue<string>("clientUrl")}/reset-password/{user.Id}?code={code}");

                await emailService.SendEmailAsync(forgotPasswordDto.Email, "Reset Password",
                    $"To reset your password, follow the link {clientUrl}");

                return Ok("An email has been sent to your address, follow the link in it to reset the password");
                
            }
            return BadRequest("ForgotPasswordConfirmation");
        }

        [HttpPost("resetpass")]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword(ResetPasswordDto resetPasswordDto)
        {
            var user = await _userManager.FindByIdAsync(resetPasswordDto.Id);

            if (user == null)
            {
                return BadRequest();
            }

            var result = await _userManager.ResetPasswordAsync(user, resetPasswordDto.Code, resetPasswordDto.Password);

            if (!result.Succeeded)
            {
                return BadRequest();
            }

            return Ok("Password has been reseted");
        }
    }
}