/* Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.
Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

 */

///////////////////// Solution //////////////////////

function validBraces(str){
    let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    //Count open braces
    if (str[i] === '(' && str[i + 1] !== ']' && str[i + 1] !== '}') {
      count += 1;
    } else if (str[i] === '[' && str[i + 1] !== ')' && str[i + 1] !== '}') {
      count += 1;
    } else if (str[i] === '{' && str[i + 1] !== ')' && str[i + 1] !== ']') {
      count += 1;
    }
    //Count close braces
    else if (str[i] === ')') {
      count -= 1;
    } else if (str[i] === ']') {
      count -= 1;
    } else if (str[i] === '}') {
      count -= 1;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}