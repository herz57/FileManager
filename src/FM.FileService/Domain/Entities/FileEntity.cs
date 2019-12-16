﻿using FM.Common.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.Entities
{
    public class FileEntity : IEntity<long>
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Extension => Name.Split(".").Last();
        public string Path { get; set; }
        public DateTime CreateDate { get; set; }
        public string UserId { get; set; }
        public bool AllowedAnonymous { get; set; }
        public ICollection<FileReadHistoryEntity> FileReadHistories { get; set; }
    }
}