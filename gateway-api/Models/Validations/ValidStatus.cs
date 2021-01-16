using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace gateway_api.Models.Validations
{
    public class ValidStatus : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string _status = value.ToString();

            if (_status == "online" || _status == "offline")
            {
                return ValidationResult.Success;
            }

            return new ValidationResult("Status can only be online or offline.");
        }
    }
}
