function sumNumbers(a, b) {
	a = Number(a);
	b = Number(b);
	return a + b;
}

function subtractNumbers(a, b) {
	a = Number(a);
	b = Number(b);
	return a - b;
}

function multiplierNumbers(a, b) {
	a = Number(a);
	b = Number(b);
	return a * b;
}

function divNumbers(a, b) {
	a = Number(a);
	b = Number(b);
	return a / b;
}

function power(a, b) {
	a = Number(a);
	b = Number(b);
	
	switch(true) {
		case a == 0:
			return a;
			break;
		case b == 0:
			return 1;
			break;
		case b == 1:
			return a;
			break;
		case b > 1:
			return a = a * power(a,b-1);
			break;
		case b < 0:
			b = -1 * b;
			a = a * power(a,b-1);
			return 1/a;
			break;
		default:
			return 1;
	}
}

function calculateOperation(a,b,operation) {
	switch(operation) {
		case '+':
			return sumNumbers(a,b);
			break;
		case '-':
			return subtractNumbers(a,b);
			break;
		case '*':
			return multiplierNumbers(a,b);
			break;
		case '/':
			return divNumbers(a,b);
			break;
		case 'pow':
			return power(a,b);
			break;
		default:
			alert("Недопустимая операция");
	}
}

function compareNumbers(a, b) {
	a = Number(a);
	b = Number(b);
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

//let operands = new Map();
//operands = InputOperands();

//compareNumbers( operands.get("a"), operands.get("b"));

function showNumbers(a) {
	switch(true){
		case a == 0:
			alert(a);
			a++;	
		case a == 1:
			alert(a);
			a++;	
		case a == 2:
			alert(a);
			a++;	
		case a == 3:
			alert(a);
			a++;	
		case a == 4:
			alert(a);
			a++;
		case a == 5:
			alert(a);
			a++;	
		case a == 6:
			alert(a);
			a++;	
		case a == 7:
			alert(a);
			a++;	
		case a == 8:
			alert(a);
			a++;	
		case a == 9:
			alert(a);
			a++;	
		case a == 10:
			alert(a);
			a++;	
		case a == 11:
			alert(a);
			a++;	
		case a == 12:
			alert(a);
			a++;	
		case a == 13:
			alert(a);
			a++;	
		case a == 14:
			alert(a);
			a++;	
		case a == 15:
			alert(a);
			a++;
			break;
   		default:
        		alert("Некоректное значение");
	}	
}

//let a = 10;
//showNumbers(a);
//alert(power(3,-3));
//alert(sumNumbers(2,3));
//alert(subtractNumbers(2,3));
//alert(multiplierNumbers(2,3));
//alert(divNumbers(2,4));

alert(calculateOperation(1,2,'+'));
alert(calculateOperation(1,2,'-'));
alert(calculateOperation(1,2,'*'));
alert(calculateOperation(1,2,'/'));
alert(calculateOperation(1,2,'pow'));
