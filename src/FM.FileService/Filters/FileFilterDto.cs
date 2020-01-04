using FM.FileService.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Filters
{
    public class FileFilterDto
    {
        public FileFilters Filters { get; set; }
        public FileSortingMode SortingMode { get; set; }
        public string SortingColumn { get; set; }
        public int PageIndex { get; set; } = 1;
        public int ItemsPage { get; set; } = 10;
    }
}
