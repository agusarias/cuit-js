
var CuitValidator = {
    /* CUIT validation method */
    validate: function(cuit){
        /* We check the 99-9999999999-9 format */
        var cuit_format= /^[0-9]{2}-[0-9]{8}-[0-9]$/;
        if(!cuit_format.test(cuit)){
            return false;
        }

        /* Get the verification digit */
        var cuit_verification_digit = CuitValidator.get_cuit_verification_digit(cuit);

        /* The last digit of the cuit should be equal to the verification digit. */
        return cuit[12] == cuit_verification_digit;
    },

    /* For a given CUIT, calculates the valid verification digit. */
    get_cuit_verification_digit: function (cuit){
        // Remove the -'s
        var digits = cuit.replace("-", "").replace("-", "");

        var acum = 0;
        var multiplication_array = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        for(var j=0; j<multiplication_array.length; j++) {
            acum += digits[j] * multiplication_array[j];
        }

        var verification_digit = 11 - (acum % 11);
        if (verification_digit == 11){
            verification_digit = 0;
        }
        if (verification_digit == 10){
            verification_digit = 9;
        }
        return verification_digit;
    }
}
