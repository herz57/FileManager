using System;
using System.Collections.Generic;
using System.Text;

namespace FM.Common.Extensions
{
    public static class DatetimeConverter
    {
        public static DateTime ConvertToUtc(this long source)
        {
            DateTime dateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0).AddSeconds(source);
            return dateTime;
        }

        public static long ConvertToUnix(this DateTime sourceMember)
        {
            TimeSpan span = sourceMember - new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            long timestamp = (long)span.TotalSeconds;
            return timestamp;
        }
    }
}

