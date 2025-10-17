// ❔❔❔DESCRIPTION❔❔❔
/*Завершите решение так, чтобы оно перевернуло переданную в него строку.
'world'  =>  'dlrow'
'word'   =>  'drow'*/

// 📝📝📝TEST📝📝📝
/*assert.strictEqual(solution('world'), 'dlrow');
assert.strictEqual(solution('hello'), 'olleh');
assert.strictEqual(solution(''), '');
assert.strictEqual(solution('h'), 'h');*/

// ✅✅✅SOLUTION✅✅✅
/*function solution(str){
return str.split('').reverse().join('');
}*/

solution = str => str.split('').reverse().join('');

console.log(solution('world'))