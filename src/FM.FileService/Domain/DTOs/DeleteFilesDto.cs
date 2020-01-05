using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.DTOs
{
    public class DeleteFilesDto
    {
        public Guid[] Ids { get; set; }
    }
}
