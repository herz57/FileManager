using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Web;
using System.Text.Json;
using System.Text;
using System.Net.Http.Headers;

namespace FM.Application.Infrastructure
{
    public class InnerHttpClient
    {
        private readonly HttpClient _client;

        public InnerHttpClient(HttpClient client)
        {
            _client = client;
        }

        public async Task<HttpResponseMessage> DeleteQuery(string parameters, string token)
        {
            _client.DefaultRequestHeaders.Add("Authorization", token);
            return await _client.DeleteAsync(parameters);
        }
    }
}