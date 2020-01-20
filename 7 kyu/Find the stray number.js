/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

///////////////////// Solution //////////////////////

function stray(numbers) {
    return numbers.filter((value, index) => numbers.indexOf(value) === numbers.lastIndexOf(value))[0];
  }

///////////////////// Solution //////////////////////

function stray(arr) {
    return arr.filter((value, index) => arr[index] !== arr[index + 1] && arr[index] !== arr[index - 1])[0];
 }