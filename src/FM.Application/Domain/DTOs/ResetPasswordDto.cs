﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FM.Application.Domain.DTOs
{
    public class ResetPasswordDto
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string PasswordConfirm { get; set; }

        public string Code { get; set; }
    }
}
