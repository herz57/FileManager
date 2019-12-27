using FluentValidation;
using FM.Application.Domain.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.Application.Infrastructure.Validation
{
    public class CreateUserValidator : AbstractValidator<CreateUserDto>
    {
        public CreateUserValidator()
        {
            RuleFor(p => p.UserName)
                .NotEmpty()
                .Length(5, 20)
                .WithMessage("Username must has minimum 5 and maximum 16 characters")
                .Matches(@"^[a-zA-Z][a-zA-Z0-9]")
                .WithMessage("Username must start with a letter");

            RuleFor(p => p.Email)
                .EmailAddress()
                .WithMessage("Incorrect email address");

            RuleFor(p => p.Password)
                .Matches(@"^(?=.*[a-z])(?=.*[A-Z])")
                .WithMessage("Pawssword must has at least one lowercase letter and one uppercase letter")
                .Matches(@"^(?=.*\d)")
                .WithMessage("Pawssword must has at least one number")
                .Matches(@"^(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]")
                .WithMessage("Password must has at least one special character")
                .Length(8, 20)
                .WithMessage("Password must has minimum 8 and maximum 20 characters");

            RuleFor(p => p.Password)
                .Equal(p => p.PasswordConfirm)
                .WithMessage("Passwords don`t match");
        }
    }
}
