using FluentValidation;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Infrastructure.Validation
{
    public class FormFileValidator : AbstractValidator<IFormFile>
    {
        public FormFileValidator()
        {
            RuleFor(f => f.FileName)
                .NotEmpty()
                .Length(1, 100)
                .WithMessage("Filename must has minimum 1 and maximum 100 characters");
        }
    }

    public class FormFileListValidator : AbstractValidator<List<IFormFile>>
    {
        public FormFileListValidator()
        {
            RuleForEach(f => f)
                .SetValidator(new FormFileValidator());
        }
    }
}
