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
        private Repository<File, long> _fileRepository;
        private Repository<FileReadHistory, long> _fileReadHistoryRepository;

        public UnitOfWork(FileDbContext context)
        {
            _context = context;
        }

        public Repository<File, long> FileRepository
        {
            get
            {
                if (_fileRepository == null)
                    _fileRepository = new Repository<File, long>(_context);
                return _fileRepository;
            }
        }

        public Repository<FileReadHistory, long> FileReadHistoryRepository
        {
            get
            {
                if (_fileReadHistoryRepository == null)
                    _fileReadHistoryRepository = new Repository<FileReadHistory, long>(_context);
                return _fileReadHistoryRepository;
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
