/* Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
 */

///////////////////// Solution //////////////////////

function findOdd(array) {
    return array.filter((value, index) => array.filter(item => item === value).length % 2 !== 0)[0];
}