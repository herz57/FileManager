using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.DTOs
{
    public class FileHistoryResponseDto
    {
        public int FileHistoryLength { get; set; }
        public FileReadHistoryDto[] History { get; set; }
    }
}
