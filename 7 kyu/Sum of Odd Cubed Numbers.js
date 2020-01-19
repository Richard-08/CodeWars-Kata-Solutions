/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.  */

////////////////////////////Solution////////////////////////////

function cubeOdd(arr) {
    return arr.some(value => typeof value == 'string') ? 
    undefined : 
    arr.map(value => value * value * value)
              .filter(value => value % 2 !== 0)
              .reduce((a, b) => a + b, 0)
    }