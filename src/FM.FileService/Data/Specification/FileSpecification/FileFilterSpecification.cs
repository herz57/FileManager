using FM.Common.DataAccess.Interfaces;
using FM.Common.Enums;
using FM.FileService.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace FM.FileService.Data.Specification.FileSpecification
{
    public class FileFilterSpecification<T> : BaseSpecification<T> where T : IEntity<Guid>
    {
        public FileFilterSpecification(Expression<Func<T, bool>> expression,
            int skip, 
            int take)
            : base(expression)
        {
            ApplyPaging(skip, take);
        }
    }
}
