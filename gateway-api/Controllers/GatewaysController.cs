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
        [Route("")]
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
                return ValidationProblem(e.Message);
            }
        }

        [HttpGet]
        [Route("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<IQueryable<Gateway>> GetGatewayById([FromRoute] int Id)
        {
            var gatewayDB = _context.Gateways.FirstOrDefault(g => g.Id == Id);

            if (gatewayDB == null) return NotFound();

            return Ok(gatewayDB);
        }

        [HttpPut]
        [Route("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<IQueryable<Gateway>> PutGateway([FromRoute] int Id, [FromBody] Gateway gateway)
        {
            try
            {
                var gatewayDB = _context.Gateways.FirstOrDefault(g => g.Id == Id);

                if (gatewayDB == null) return NotFound();

                gatewayDB.Name = gateway.Name;
                gatewayDB.Serial = gateway.Serial;
                gatewayDB.Address = gateway.Address;

                _context.SaveChanges();
                return Ok(gateway);
            }
            catch (Exception e)
            {
                return ValidationProblem(e.Message);
            }
        }

        [HttpDelete]
        [Route("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<IQueryable<Gateway>> DeleteGateway([FromRoute] int Id)
        {
            var gatewayDB = _context.Gateways.FirstOrDefault(g => g.Id == Id);

            if (gatewayDB == null) return NotFound();

            _context.Gateways.Remove(gatewayDB);
            _context.SaveChanges();

            return NoContent();
        }



    }
}
