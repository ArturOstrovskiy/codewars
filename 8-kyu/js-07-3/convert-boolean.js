// ❔❔❔DESCRIPTION❔❔❔

// 📝📝📝TEST📝📝📝
// assert.strictEqual(boolToWord(true), 'Yes')
// assert.strictEqual(boolToWord(false), 'No')

// ✅✅✅SOLUTION✅✅✅
function boolToWord( bool ){
if( bool ){
	return 'Yes'
} else {
	return 'No'
}
}
console.log(boolToWord(1))

/*
function boolToWord1( bool ){
	return bool ? 'Yes':'No';
}*/
