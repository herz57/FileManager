using System;
using System.Collections.Generic;
using System.Text;

namespace FM.Common.DataAccess.Interfaces
{
    public interface IEntity<TKey>
    {
        TKey Id { get; }
    }
}
