/* Your task is to find the first element of an array that is not consecutive.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null or Nothing.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1) Can you write a solution that will return null for both [] and [ x ] though? ( This is not tested, but you can write your own example test. )
 */

///////////////////// Solution //////////////////////

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const num = arr[i] + 1
      const consecutive = arr[i + 1]
      if (num !== consecutive) return consecutive
    }
    return null
  }