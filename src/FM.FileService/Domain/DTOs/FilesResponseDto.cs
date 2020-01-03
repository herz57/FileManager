using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.DTOs
{
    public class FilesResponseDto
    {
        public int UserFilesLength { get; set; }
        public FileDto[] Files { get; set; }
    }
}
