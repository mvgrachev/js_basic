function compare_numbers(a, b){
	if (a >= 0 && b >= 0 )
		alert(b - a);
	else if (a < 0 && b < 0 )
		alert(a * b);
	else if ( (a < 0 && b > 0) || (a > 0 && b < 0 ) )
		alert(a + b);
}

function InputOperands () {
	let a = prompt('Введите значения переменной a:', 0);
	let b = prompt('Введите значения переменной b:', 0);
	let re = '/[^-]\D//g';
	a = a.replace(re);
	b = b.replace(re);
	if ( a == '' || b == '' ) {
		return InputOperands();
	}
	
	let hash = new Map([
  		['a', a],
  		['b', b]
	]);
	return hash;
}

let operands = new Map();
operands = InputOperands();

compare_numbers( operands.get("a"), operands.get("b"));
