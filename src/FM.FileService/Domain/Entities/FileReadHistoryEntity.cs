using FM.Common.DataAccess.Interfaces;
using FM.FileService.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.Domain.Entities
{
    public class FileReadHistoryEntity : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public Guid FileId { get; set; }
        public string UserId { get; set; }
        public FileEntity File { get; set; }
        public DateTime Date { get; set; }
    }
}
