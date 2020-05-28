function InputCelsiumDegree () {
	let celsiumDegree = prompt('Введите значения в градусах цельсия:', 20);
	let re = '/\D//g';
	celsiumDegree = celsiumDegree.replace(re);
	if ( celsiumDegree == '' ) {
		return InputCelsiumDegree();
	}
	return celsiumDegree;
}

function ConvertCelsiumToFahrenheit ( celsiumDegree ) {
	let fahrenheitDegree = (9 / 5) * celsiumDegree + 32;
	alert( fahrenheitDegree );
	return fahrenheitDegree;
}

let celsiumDegree = InputCelsiumDegree();
ConvertCelsiumToFahrenheit(celsiumDegree);
