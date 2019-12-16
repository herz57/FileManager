using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace FM.Common.DataAccess.Interfaces
{
    public interface IRepository<TEntity, TKey> where TEntity : class, IEntity<TKey>
    {
        Task<TEntity> FindAsync(TKey key);
        Task<TEntity[]> GetAsync(Expression<Func<TEntity, bool>> expression);
        Task<TEntity[]> GetAllAsync();
        Task<TEntity> CreateAsync(TEntity item);
        Task<bool> IsExistAsync(TKey key);
        TEntity Update(TEntity item);
        bool Delete(TKey key);
    }
}

