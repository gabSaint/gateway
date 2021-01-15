﻿using gateway_api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gateway_api.Contexts
{
    public class GatewayContext : DbContext
    {
        public GatewayContext(DbContextOptions<GatewayContext> options) : base(options) { }

        public DbSet<Gateway> Gateways { get; set; }
    }
}
