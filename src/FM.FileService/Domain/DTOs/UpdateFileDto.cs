using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.DTOs
{
    public class UpdateFileDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool AllowedAnonymous { get; set; }
    }
}
