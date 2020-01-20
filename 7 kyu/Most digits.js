/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
 */

///////////////////// Solution //////////////////////

function findLongest(array){
    return Number(array.map((value) => String(value)).sort((a, b) => b.length - a.length)[0]);
 }