// DESCRIPTION
/*В этой игре герой движется слева направо. Игрок бросает кубик и дважды перемещает указанное на кубике число клеток. Создайте функцию для терминальной игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию.*/

// TEST
/*Test.assertEquals(move(0, 4), 8);
Test.assertEquals(move(3, 6), 15);
Test.assertEquals(move(2, 5), 12);*/

// SOLUTION
function move (position, roll) {
 return position + roll*2
}

console.log(move(2, 5))
