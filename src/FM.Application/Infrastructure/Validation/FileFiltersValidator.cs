using FluentValidation;
using FM.Common.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.Application.Infrastructure.Validation
{
    public class FileFiltersValidator : AbstractValidator<FileFilters>
    {
        public FileFiltersValidator()
        {
            RuleFor(p => p.Id)
                .NotEmpty()
                .Length(1, 50)
                .WithMessage("Id must has minimum 1 and maximum 50 characters")
                .When(p => p.Id != null);

            RuleFor(p => p.Name)
                .NotEmpty()
                .Length(1, 30)
                .When(p => p.Name != null)
                .WithMessage("Name must has minimum 1 and maximum 30 characters");

            RuleForEach(p => p.Size).LessThanOrEqualTo(20971520);

            RuleForEach(p => p.UploadTime).LessThanOrEqualTo(5000000000);
        }
    }
}

