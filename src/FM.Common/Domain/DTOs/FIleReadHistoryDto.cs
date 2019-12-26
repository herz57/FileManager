using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.Common.Domain.DTOs
{
    public class FileReadHistoryDto
    {
        public Guid Id { get; set; }
        public Guid FileId { get; set; }
        public string UserId { get; set; }
        public long Date { get; set; }
        public int MyProperty { get; set; }
    }
}
