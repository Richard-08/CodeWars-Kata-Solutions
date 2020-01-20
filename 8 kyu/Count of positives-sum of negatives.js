/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

///////////////////// Solution //////////////////////

function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
      return [];
    }
    const positive = input.filter((value) => value > 0).length;
    const negative = input.filter((value) => value < 0).reduce ((a, b) => a + b);
    let arr = [];
    arr.push(positive, negative);
    return arr;
}