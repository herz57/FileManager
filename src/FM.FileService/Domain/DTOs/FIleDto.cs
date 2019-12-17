using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.DTOs
{
    public class FileDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool AllowedAnonymous { get; set; }
        public long Size { get; set; }
        public long UploadedTime { get; set; }
    }
}
