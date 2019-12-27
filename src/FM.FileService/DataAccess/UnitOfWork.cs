using FM.Common.DataAccess.Interfaces;
using FM.FileService.Data;
using FM.FileService.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.FileService.DataAccess
{
    public class UnitOfWork
    {
        private readonly FileDbContext _context;
        private bool disposed;
        private Repository<FileEntity, Guid> _fileRepository;
        private Repository<FileReadHistoryEntity, Guid> _fileReadHistoryRepository;
        private Repository<FilesSizeForUserEntity, Guid> _filesSizeForUserRepository;

        public UnitOfWork(FileDbContext context)
        {
            _context = context;
        }

        public Repository<FileEntity, Guid> FileRepository
        {
            get
            {
                if (_fileRepository == null)
                    _fileRepository = new Repository<FileEntity, Guid>(_context);
                return _fileRepository;
            }
        }

        public Repository<FileReadHistoryEntity, Guid> FileReadHistoryRepository
        {
            get
            {
                if (_fileReadHistoryRepository == null)
                    _fileReadHistoryRepository = new Repository<FileReadHistoryEntity, Guid>(_context);
                return _fileReadHistoryRepository;
            }
        }

        public Repository<FilesSizeForUserEntity, Guid> FilesSizeForUserEntity
        {
            get
            {
                if (_filesSizeForUserRepository == null)
                    _filesSizeForUserRepository = new Repository<FilesSizeForUserEntity, Guid>(_context);
                return _filesSizeForUserRepository;
            }
        }

        public Task<int> SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            disposed = true;
        }
    }
}
