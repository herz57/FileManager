using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Web;
using System.Text.Json;

namespace FM.Application.Services
{
    public class InnerHttpClient
    {
        private readonly HttpClient _client;

        public InnerHttpClient(HttpClient client)
        {
            _client = client;
        }

        public async Task<object> GetAsync(int page = 0, int pageSize = 0)
        {
            string request = "";
            request = page > 0 && pageSize > 0 ? page + "/" + pageSize : request;
            var response = await _client.GetAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStreamAsync();
                var res = await JsonSerializer.DeserializeAsync<object>(responseStream);
                return res;
            }
            else
            {
                return new object[] { response.StatusCode, response.ReasonPhrase };
            }
        }

        public async Task<HttpResponseMessage> GetByIdAsync(string request)
        { 
            var response = await _client.GetAsync(request);
            return response;
        }
    }
}
