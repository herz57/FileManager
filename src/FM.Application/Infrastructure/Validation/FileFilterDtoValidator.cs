using FluentValidation;
using FM.Common.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.Application.Infrastructure.Validation
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
    }
}
