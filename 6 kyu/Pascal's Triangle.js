/* Pascal's Triangle
Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle

Write a function that, given a depth (n), returns a single-dimensional array/list representing Pascal's Triangle from the 
first to the n-th level.

For example:

pascalsTriangle(4) == [1, 1, 1, 1, 2, 1, 1, 3, 3, 1] */

/* //////////////////////// Solution ///////////////////////// */

const pascalsTriangle = (n) => {
    if (n === 1) {
        return [1];
    }
    let arr = [1, 1, 1];
    let x = 1;
    let y = 3;
    for (let i = 3; i <= n; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (j === 0 || j === i - 1) {
                arr.push(1);
            } else {
                arr.push(arr.slice(x, y)[j - 1] + arr.slice(x, y)[j]);
            }
        }
        x += i - 1;
        y += x;
    }
    return arr;
}

console.log(pascalsTriangle(4)); // [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]