using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Filters
{
    public class FileFilters
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool? AllowedAnonymous { get; set; }
        public long[] Size { get; set; }
        public long[] UploadTime { get; set; }
    }
}
