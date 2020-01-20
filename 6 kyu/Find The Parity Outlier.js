/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

 */

///////////////////// Solution //////////////////////

function findOutlier(integers) {
    let countEven = [];
    let countOdd = [];
    for (let i = 0; i < integers.length; i += 1) {
      if (integers[i] % 2 === 0) {
        countEven.push(integers[i]);
      } else {
        countOdd.push(integers[i]);
      }
    }
    return countEven.length === 1 ? countEven[0] : countOdd[0];
  }