using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace FM.Application.Services
{
    public class EmailService
    {
        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MailMessage();

            emailMessage.From = new MailAddress("exet52hl@gmail.com");
            emailMessage.To.Add(email);
            emailMessage.Subject = subject;
            emailMessage.Body = message;

            using (var client = new SmtpClient())
            {
                await client.SendMailAsync(emailMessage);
            }
        }
    }
}
