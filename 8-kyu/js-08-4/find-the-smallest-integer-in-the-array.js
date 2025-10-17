// ❔❔❔DESCRIPTION❔❔❔
/*Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
Например:
Учитывая [34, 15, 88, 2], ваше решение вернет 2
Учитывая [34, -345, -1, 100],ваше решение вернет -345.
Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.*/

// 📝📝📝TEST📝📝📝
/*assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);*/

// ✅✅✅SOLUTION✅✅✅

function findSmallestInt(arr) {
 return arr.reduce((a,b) => Math.min(a,b));
	// .reduce возвращает окончательное единственное значение Math.min
	// Синтаксис: (параметры) => выражение.
}

console.log(findSmallestInt([78,56,232,12,8]))