// ❔❔❔DESCRIPTION❔❔❔
/*Создайте боевую функцию, которая берёт текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.*/

// 📝📝📝TEST📝📝📝
/*Test.assertEquals(combat(100, 5), 95);
Test.assertEquals(combat(92, 8), 84);
Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");*/

// ✅✅✅SOLUTION✅✅✅
function combat(health, damage) {
return health - damage > 0  ? health - damage : 0
}

console.log(combat(0, 95))

/*
function combat(health, damage) {
	return health < damage ? 0 : health - damage
}*/
