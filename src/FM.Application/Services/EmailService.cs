using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace FM.Application.Services
{
    public class EmailService
    {
        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MailMessage();

            emailMessage.From = new MailAddress("filedriveteam@gmail.com");
            emailMessage.To.Add(email);
            emailMessage.Subject = subject;
            emailMessage.Body = message;

            using (var client = new SmtpClient())
            {
                client.UseDefaultCredentials = false;
                client.Host = "smtp.gmail.com";
                client.Port = 587;
                client.EnableSsl = true;
                client.Credentials = new NetworkCredential(emailMessage.From.Address, "s76578909090");
                await client.SendMailAsync(emailMessage);
            }
        }
    }
}
