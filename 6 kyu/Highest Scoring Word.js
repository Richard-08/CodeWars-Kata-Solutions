/* Description:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

///////////////////// Solution //////////////////////
function high(x){
    const score = x.split(' ')
                .map(value => value.split('')
                                .map(v => v.charCodeAt() - 96)
                                .reduce((a, b) => a + b));
    return x.split(' ')[score.indexOf(Math.max(...score))];
}

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));

/* Test.describe("Basic tests",_=>{
    Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
    Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
    Test.assertEquals(high('take me to semynak'), 'semynak'); 
    Test.assertEquals(high('massage yes massage yes massage'), 'massage'); 
    Test.assertEquals(high('take two bintang and a dance please'), 'bintang'); 
    }) */

///////////////////// Solution //////////////////////

function high(x){
    const score = x.split(' ')
                .map(value => value.split('').reduce((a, b) => a + b.charCodeAt() - 96, 0));
    return x.split(' ')[score.indexOf(Math.max(...score))];
}
