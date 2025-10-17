// ❔❔❔DESCRIPTION❔❔❔
/*Необходимо рассчитать средние значения. Все студенты приходят к вам и умоляют вычислить для них средний балл.
Легкий ! Вам просто нужно написать сценарий.
Возвращает среднее значение данного массива, округленное до ближайшего целого числа. Массив никогда не будет пустым.*/

// 📝📝📝TEST📝📝📝
/*Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);*/

// ✅✅✅SOLUTION✅✅✅
function getAverage(array){
	return Math.floor(array.reduce((a, b) => a + b)/array.length);
}

console.log(getAverage([1,222,123,4,5,]))