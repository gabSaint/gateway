using gateway_api.Contexts;
using gateway_api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gateway_api.Controllers
{
    [ApiController]
    [Route("/gateways")]
    [Produces("application/json")]
    public class GatewaysController : ControllerBase
    {
        private readonly GatewayContext _context;

        private readonly ILogger<GatewaysController> _logger;

        public GatewaysController(GatewayContext context)
        {
            _context = context;

            if (!_context.Gateways.Any())
            {
                GatewaySeed.InitData(context);
            }
        }

        [HttpGet]
        [Route("")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IQueryable<Gateway>> GetGateways()
        {
            var result = _context.Gateways as IQueryable<Gateway>;

            return Ok(result.OrderBy(gateway => gateway.Id));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<IQueryable<Gateway>> PostGateway(Gateway gateway)
        {
            try
            {
                _context.Gateways.Add(gateway);
                _context.SaveChanges();

                return new CreatedResult($"/gateways/{gateway.Id}", gateway);
            }
            catch (Exception e)
            {
                _logger.LogWarning(e, "Unable to create Gateway");

                return ValidationProblem(e.Message);
            }
        }



    }
}
