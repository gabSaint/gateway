using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using gateway_api.Contexts;
using gateway_api.Extensions;

namespace gateway_api.Models
{
    public class Gateway
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Serial { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }
    }

    public static class GatewaySeed
    {
        public static void InitData(GatewayContext context)
        {
            var rnd = new Random();

            var serials = new[] { "2HJ561", "18K3LO", "09DP4K", "NWE3M4", "NT88M4" };

            var names = new[] { "gateway1", "gateway2", "gateway3", "gateway4", "gateway5", "gateway6" };

            var addresses = new [] {"127.0.0.1", "127.0.0.2", "127.0.0.3", "127.0.0.4", "127.0.0.5" };

            context.Gateways.AddRange(100.Times(x =>
            {
                var serial = serials[rnd.Next(0, 5)];
                var name = names[rnd.Next(0, 6)];
                var address = addresses[rnd.Next(0, 5)];
                var id = $"{x,-3:000}";

                return new Gateway
                {
                    Id = x,
                    Name = name,
                    Serial = serial,
                    Address = address
                };
            }));

            context.SaveChanges();
        }
    }
}
