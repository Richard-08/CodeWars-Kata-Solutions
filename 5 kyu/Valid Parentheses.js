/* Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100
 */

///////////////////// Solution //////////////////////

function validParentheses(parens){
    let count = 0;
    for (let i = 0; i < parens.length; i += 1) {
      if (parens[i] === '(') {
        count += 1;
      } else if (parens[i] === ')') {
        count -= 1;
        if (count < 0) {
          return false;
        }
      }
    }
    return count === 0 ? true : false;
  }