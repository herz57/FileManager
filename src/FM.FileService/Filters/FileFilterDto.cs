using FM.Common.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Filters
{
    public class FileFilterDto
    {
        public FileFilters Filters { get; set; }
        public FileFilterMode FilterMode { get; set; }
        public FileOrderingMode OrderingMode { get; set; }
        public string OrderingColumn { get; set; }
        public int PageIndex { get; set; }
        public int ItemsPage { get; set; }
    }
}
