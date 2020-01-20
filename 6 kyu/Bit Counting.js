/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

///////////////////// Solution //////////////////////

var countBits = function(num) {
    let bin = [];
    while (num > 0) {
      bin.unshift(num % 2);
      num = Math.floor(num / 2); 
    }
    return bin.filter(value => value === 1).length;
  };