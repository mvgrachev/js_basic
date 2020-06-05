function showSimpleNumbers() {
	let arr = [];
	// заполняем массив изначальными значениями
	for (let i = 0; i < 100; i++) {
		arr.push(i);
	}
	arr[1] = 0;
	let i = 2;

	while ( i < 100 ) {
		let j = i + i;
		while ( j <= 100 ) {
			//это число составное, поэтому заменяем его нулем
			arr[j] = 0;
			//переходим к следующему числу, которое кратно i (оно на i больше)
			j = j + i;
		}
		i++;
	}
	// исключаем нули
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if ( arr[i] != 0 ) {
			res.push(arr[i]);
		}
	}
	return res;
}

alert(showSimpleNumbers());
