using gateway_api.Contexts;
using gateway_api.Extensions;
using gateway_api.Models.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace gateway_api.Models
{
    public class Peripheral
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Vendor { get; set; }

        [Required]
        public string Date { get; set; }

        [Required]
        [ValidStatus]
        public string Status { get; set; }

        [Required]
        [ForeignKey("Gateway")]
        public int GatewayId { get; set; } 

    }

    public static class PeripheralSeed
    {
        public static void InitData(DataContext context)
        {
            var rnd = new Random();

            var vendors = new[] { "ASL", "AFG", "HJP", "GER", "SPI" };

            var statuss = new[] { "online", "offline" };

            var dates = new[] { "Mon Jan 11 2021", "Tue Jan 12 2021", "Wed Jan 13 2021", "Thu Jan 14 2021", "Fri Jan 15 2021"  };

            context.Peripherals.AddRange(100.Times(x =>
            {
                var vendor = vendors[rnd.Next(0, 5)];
                var status = statuss[rnd.Next(0, 2)];
                var date = dates[rnd.Next(0, 5)];
                var id = $"{x,-3:000}";
                var gatewayId = rnd.Next(0, 20);

                return new Peripheral
                {
                    Id = x,
                    Vendor = vendor,
                    Date = date,
                    Status = status,
                    GatewayId = gatewayId
                };
            }));

            context.SaveChanges();
        }
    }
}
