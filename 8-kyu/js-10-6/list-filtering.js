// ❔❔❔DESCRIPTION❔❔❔
//Cоздадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

// 📝📝📝TEST📝📝📝
/*assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');*/

// ✅✅✅SOLUTION✅✅✅
  const filter_list = l => l.filter(i => typeof i === 'number');
// filter_list = l все равно что function filter_list(l){}

/* i => ...: Это синтаксис стрелочной функции.
Он объявляет анонимную функцию, которая принимает один аргумент с именем a*/

/*
typeof i === 'number' сравнивает тип аргумента i с 'number'(число)
если true, то filter добавляет i в новый массив
*/
console.log(filter_list([1,2,'a','b']))




