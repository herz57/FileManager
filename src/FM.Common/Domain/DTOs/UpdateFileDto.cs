using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.Common.Domain.DTOs
{
    public class UpdateFileDto
    {
        public Guid Id { get; set; }
        public bool AllowedAnonymous { get; set; }
    }
}
