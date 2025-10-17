// ❔❔❔DESCRIPTION❔❔❔
/*Получить сумму двух массивов
Фактически сумму всех их элементов. Я буду признателен за вашу помощь.
P.S. Каждый массив содержит только целые числа. Выходные данные тоже являются числом.*/

// 📝📝📝TEST📝📝📝
/*assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);*/

// ✅✅✅SOLUTION✅✅✅

/*function arrayPlusArray(arr1, arr2) {
	return 	arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b) ;
}*/

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
	return [].concat(...arrays).reduce((a,b) => a+b,0)
	//[].concat(...arrays)распределяет массивы и объединяет их в пустой массив
	// [1, 2, 3], [4, 5, 6] становятся одним массивом [1, 2, 3, 4, 5, 6]
	// .reduce((a,b) => a+b) выполняет a+b,каждый раз присваивает сумму a и в конце возвращает финальную a
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))