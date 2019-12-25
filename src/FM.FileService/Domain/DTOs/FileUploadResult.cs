using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace FM.FileService.Domain.DTOs
{
    public class FileUploadResult
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public int Count { get; set; }
        public long Size { get; set; }
    }
}
