/* Description:

Inspired by the Fold an Array kata. This one is sort of similar but a little different.
Task

You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

    Step 1: Split the array in two:

    [1, 2, 5, 7, 2, 3, 5, 7, 8]
          /            \
    [1, 2, 5, 7]    [2, 3, 5, 7, 8]

    Step 2: Put the arrays on top of each other:

       [1, 2, 5, 7]
    [2, 3, 5, 7, 8]

    Step 3: Add them together:

    [2, 4, 7, 12, 15]

Repeat the above steps n times or until there is only one number left, and then return the array. */


function splitAndAdd(arr, n) {

    if (n <= 0 || arr.length < 1) {
        return arr;
    }

    let arr1 = arr.slice(0, Math.floor(arr.length / 2));
    let arr2 = arr.slice(Math.floor(arr.length / 2));
    arr1.length !== arr2.length ? arr1.length < arr2.length ? arr1.unshift(0) : arr2.unshift(0) : arr1;

    let result = [];

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i += 1) {
        let sum = arr1[i] + arr2[i];
        result.push(sum);
    }
    n = n - 1;

    return splitAndAdd(result, n);
}

console.log(splitAndAdd([4, 2, 5, 3, 2, 5, 7], 2));
