/* Description:

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed 
characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained 
is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there 
are multiple words. Words will be separated by a single space(' ').
Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe" */


/* ///////////////////// Solution //////////////////////// */


function toWeirdCase(str) {
    let newStr = '';
    let j = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === ' ') {
            newStr = newStr + str[i];
            j = i + 1;
        } else if ((i - j) % 2 === 0) {
            newStr = newStr + str[i].toUpperCase();
        } else {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

console.log(toWeirdCase("String")); // "StRiNg"
console.log(toWeirdCase("Weird string case")); // "WeIrD StRiNg CaSe"