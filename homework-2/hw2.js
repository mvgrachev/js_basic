function compare_numbers(x, y){
   if (a > b)
      alert("x > y");
   else if (x < y)
      alert("x < y");
   else
      alert("x = y");
}

function InputOperands () {
	let a = prompt('Введите значения переменной a:', 0);
	let b = prompt('Введите значения переменной b:', 0);
	let re = '/\D//g';
	a = a.replace(re);
	b = b.replace(re);
	if ( a == '' || b == '' ) {
		return InputOperands();
	}
	
	let hash = new Map([
  		['a', a],
  		['a', b]
	]);
	return hash;
}

let operands = new Map();
operands = InputOperands();

alert(operands.get("a"));
