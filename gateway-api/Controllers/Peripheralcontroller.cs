using gateway_api.Contexts;
using gateway_api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gateway_api.Controllers
{
    [ApiController]
    [Route("/api/peripherals")]
    [Produces("application/json")]
    public class Peripheralcontroller : ControllerBase
    {
        private readonly DataContext _context;

        public Peripheralcontroller(DataContext context)
        {
            _context = context;

            if (!_context.Peripherals.Any())
            {
                PeripheralSeed.InitData(context);
            }
        }

        [HttpGet]
        [Route("")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IQueryable<Peripheral>> GetPeripherals()
        {
            var result = _context.Peripherals as IQueryable<Peripheral>;

            return Ok(result.OrderBy(gateway => gateway.Id));
        }

        [HttpPost]
        [Route("")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<IQueryable<Peripheral>> PostPeripheral(Peripheral peripheral)
        {
            // Validate no more than ten peripherals allowed per gateway
            var gId = peripheral.GatewayId;
            var peripherals = _context.Peripherals.Where(p => p.GatewayId == gId);

            if (peripherals.Count() >= 10)
            {
                return ValidationProblem("Gateway cannot have more than 10 peripherals.");
            }

            var gateway = _context.Gateways.FirstOrDefault(g => g.Id == gId);
            if (gateway == null)
            {
                return ValidationProblem("Peripheral has to be associated to a valid gateway");
            }

            try
            {
                _context.Peripherals.Add(peripheral);
                _context.SaveChanges();

                return new CreatedResult($"/peripherals/{peripheral.Id}", peripheral);
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
        public ActionResult<IQueryable<Peripheral>> GetPeripheralById([FromRoute] int Id)
        {
            var peripheralDB = _context.Peripherals.FirstOrDefault(p => p.Id == Id);

            if (peripheralDB == null) return NotFound();

            return Ok(peripheralDB);
        }

        [HttpPut]
        [Route("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<IQueryable<Peripheral>> PutPeripheral([FromRoute] int Id, [FromBody] Peripheral peripheral)
        {
            try
            {
                var peripheralDB = _context.Peripherals.FirstOrDefault(p => p.Id == Id);

                if (peripheralDB == null) return NotFound();

                peripheralDB.Vendor = peripheral.Vendor;
                peripheralDB.Status = peripheral.Status;
                peripheralDB.Date = peripheral.Date;

                _context.SaveChanges();
                return Ok(peripheral);
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
        public ActionResult<IQueryable<Peripheral>> DeleteGateway([FromRoute] int Id)
        {
            var peripheralDB = _context.Peripherals.FirstOrDefault(p => p.Id == Id);

            if (peripheralDB == null) return NotFound();

            _context.Peripherals.Remove(peripheralDB);
            _context.SaveChanges();

            return NoContent();
        }
    }


}
