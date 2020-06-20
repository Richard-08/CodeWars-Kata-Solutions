/* Description:
Background:

You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.
Task:

Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

Note: huge lists will be tested.
Examples:

[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1 */

function findNumber(array) {
    const n = array.length + 1;
    return (n * (n + 1) / 2) - array.reduce((a, b) => a + b);
}

console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]));



/* assert.equal(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
assert.equal(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
assert.equal(findNumber([1, 2, 3, 5]), 4);
assert.equal(findNumber([1, 3]), 2);
assert.equal(findNumber([2, 3, 4]), 1);
assert.equal(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
assert.equal(findNumber([1, 2, 3]), 4); */