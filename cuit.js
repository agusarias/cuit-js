function validate_cuit(cuit){

	if(cuit == null || cuit == undefined){
		return false;
	}
	var digits = Array();
	if (cuit.length != 13) return false;
	for (var i = 0; i < cuit.length; i++) {
		if (i == 2 || i == 11) {
			if (cuit[i] != '-') return false;
		} else {
			if (!!isNaN(parseInt(cuit[i]))) return false;
			if (i  < 12) {
				digits.push(cuit[i]);
			}
		}
	}
	var acum = 0;
	var multiplication_array = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
	for(var j=0; j<multiplication_array.length; j++) {
		acum += digits[j] * multiplication_array[j];
	}
	var cmp = 11 - (acum % 11);
	if (cmp == 11) cmp = 0;
	if (cmp == 10) cmp = 9;
	return (cuit[12] == cmp);
}
