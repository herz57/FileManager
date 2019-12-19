using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;
using System.Security.Claims;

namespace STP.Identity.Application
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };
        }

        public static IEnumerable<ApiResource> GetApis()
        {
            return new List<ApiResource>
            {
                new ApiResource("IdentityService","IdentityService API"),
                new ApiResource("FileService", "FileService API"),
                new ApiResource("api1", "My API")
            };
        }

        public static class Scopes
        {
            public const string IdentityService = "IdentityService";
            public const string FileService = "FileService";
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "Web",
                    ClientName = "Web",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                    AllowOfflineAccess = true,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        Scopes.IdentityService,
                        Scopes.FileService
                    }
                },

                new Client
        {
            ClientId = "client",

            // no interactive user, use the clientid/secret for authentication
            AllowedGrantTypes = GrantTypes.ClientCredentials,

            // secret for authentication
            ClientSecrets =
            {
                new Secret("secret".Sha256())
            },

            // scopes that client has access to
            AllowedScopes = 
                    { 
                        "api1",
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        Scopes.IdentityService,
                        Scopes.FileService
                    }
        },
                new Client
                {
                    ClientId = "Swagger",
                    ClientName = "Swagger",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                    AllowOfflineAccess = true,

                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        Scopes.IdentityService,
                        Scopes.FileService
                    }
                },

                new Client
                {
                    ClientId = "innerHttp",
                    ClientName = "innerHttp",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    RequireClientSecret = false,
                    AllowOfflineAccess = true,

                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        Scopes.IdentityService,
                        Scopes.FileService
                    }
                }
            };
        }
    }
}