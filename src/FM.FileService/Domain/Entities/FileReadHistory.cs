using FM.FileService.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.Entities
{
    public class FileReadHistory
    {
        public long Id { get; set; }
        public long FileId { get; set; }
        public string UserId { get; set; }
        public File File { get; set; }
        public DateTime Date { get; set; }
    }
}
