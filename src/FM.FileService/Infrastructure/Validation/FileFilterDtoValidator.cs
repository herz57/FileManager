using FluentValidation;
using FM.FileService.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Infrastructure.Validation
{
    public class FileFilterDtoValidator : AbstractValidator<FileFilterDto>
    {
        public FileFilterDtoValidator()
        {
            RuleFor(p => p.SortingMode)
                .IsInEnum()
                .When(p => p.SortingMode != 0);

            RuleFor(p => p.SortingColumn)
                .NotEmpty()
                .Length(2, 20)
                .WithMessage("SortingColumn must has minimum 2 and maximum 20 characters")
                .Matches(@"\b(Id|Name|UploadedTime|Size|AllowedAnonymous)\b")
                .When(p => p.SortingColumn != null)
                .WithMessage("Incorrect sorting column");

            RuleFor(p => p.PageIndex)
                .LessThan(1000);

            RuleFor(p => p.ItemsPage)
                .GreaterThan(0);

            RuleFor(model => model.Filters)
                .SetValidator(new FileFiltersValidator())
                .When(p => p.Filters != null);
        }

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

                RuleForEach(p => p.Size).LessThanOrEqualTo(52428800);

                RuleForEach(p => p.UploadTime).LessThanOrEqualTo(5000000000);
            }
        }
    }
}
