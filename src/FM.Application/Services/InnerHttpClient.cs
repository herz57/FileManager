using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Web;
using System.Text.Json;
using System.Text;
using FM.Common.Filters;

namespace FM.Application.Services
{
    public class InnerHttpClient
    {
        private readonly HttpClient _client;

        public InnerHttpClient(HttpClient client)
        {
            _client = client;
        }

        public async Task<object> GetAsync(FileFilterDto fileFilterDto)
        {
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(fileFilterDto);
            var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
            var httpResponse = await _client.PostAsync("", httpContent);

            if (httpResponse.IsSuccessStatusCode)
            {
                var responseStream = await httpResponse.Content.ReadAsStreamAsync();
                var res = await JsonSerializer.DeserializeAsync<object>(responseStream);
                return res;
            }
            else
            {
                return new object[] { httpResponse.StatusCode, httpResponse.ReasonPhrase };
            }
        }

        public async Task<HttpResponseMessage> GetByIdAsync(string request)
        { 
            var httpResponse = await _client.GetAsync(request);
            return httpResponse;
        }
    }
}
