using FM.Common.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace FM.Common.DataAccess.Interfaces
{
    public class Repository<TEntity, TKey> : IRepository<TEntity, TKey>
        where TEntity : class, IEntity<TKey>
    {
        protected readonly DbContext _context;
        protected readonly DbSet<TEntity> _entity;

        public Repository(DbContext context)
        {
            _context = context;
            _entity = _context.Set<TEntity>();
        }

        public virtual async Task<TEntity> CreateAsync(TEntity item)
        {
            var result = await _entity.AddAsync(item);
            return result.Entity;
        }

        public virtual bool Delete(TKey key)
        {
            var item = _entity.Find(key);
            if (item == null)
                return false;

            var result = _entity.Remove(item);
            return result.State == EntityState.Deleted;
        }

        public virtual void DeleteRange(TEntity[] entities)
        {
            _entity.RemoveRange(entities);
        }

        public virtual Task<TEntity> FindAsync(TKey key)
        {
            return _entity.AsNoTracking().FirstOrDefaultAsync(e => e.Id.Equals(key));
        }

        public virtual Task<TEntity[]> GetAllAsync()
        {
            return _entity.AsNoTracking().ToArrayAsync();
        }

        public virtual Task<TEntity[]> GetAsync(Expression<Func<TEntity, bool>> expression)
        {
            return _entity.Where(expression).AsNoTracking().ToArrayAsync();
        }

        public virtual async Task<bool> IsExistAsync(TKey key)
        {
            var result = await _entity.FindAsync(key);
            return result != null;
        }

        public virtual TEntity Update(TEntity item)
        {
            var result = _entity.Update(item);
            return result.Entity;
        }

        public virtual Task<long> SumAsync(Expression<Func<TEntity, bool>> selectionExp, 
            Expression<Func<TEntity, long>> columnExp)
        {
            return _entity.Where(selectionExp).SumAsync(columnExp);
        }

        public virtual Task<int> CountAsync(Expression<Func<TEntity, bool>> expression)
        {
            return _entity.CountAsync(expression);
        }
    }
}

