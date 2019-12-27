using FM.Common.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.Entities
{
    public class FilesSizeForUserEntity : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public long FilesSize { get; set; }
    }
}
