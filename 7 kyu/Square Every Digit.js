/* Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 */

///////////////////// Solution //////////////////////

function squareDigits(num) {
    //may the code be with you
    let result = '';
    const str = String(num);
    for (let i = 0; i < str.length; i += 1) {
      result += String((Number(str[i]) ** 2));
    }
    return Number(result);
  }