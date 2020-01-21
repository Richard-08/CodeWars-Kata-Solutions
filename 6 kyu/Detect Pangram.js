/* Description:

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

///////////////////// Solution //////////////////////

function isPangram(string) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    const str = string.toLowerCase();
    return letters.split('').every(value => str.includes(value));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
/* console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ is  a pangram (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z missing)'))
console.log(isPangram('Pack my box with five dozen liquor jugs. is  a pangram (p missing)')); */