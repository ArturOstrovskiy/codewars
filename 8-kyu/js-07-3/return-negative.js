// ❔❔❔DESCRIPTION❔❔❔
// В этом простом задании вам дано число и нужно сделать его отрицательным. Но, может быть, число уже отрицательное?

// 📝📝📝TEST📝📝📝
// Test.assertEquals(makeNegative(42), -42);

// ✅✅✅SOLUTION✅✅✅

/*function makeNegative(num) {
	if (num > 0) {
		num *= -1
	}
	return num
}
console.log(makeNegative(-0.12))*/

function makeNegative(num) {
return	-Math.abs(num)
}
console.log(makeNegative(23))