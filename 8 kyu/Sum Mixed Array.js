/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
 */

///////////////////// Solution //////////////////////

function sumMix(x){
    return Number(x.reduce((a, b) => Number(a) + Number(b)));
  }