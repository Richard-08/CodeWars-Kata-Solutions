/* The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
Examples

[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]] */



function twosDifference(input) {
    let result = [];
    for (let i = 0; i < input.length; i += 1) {
        let pair = [];
        for (let j = i; j < input.length; j += 1) {
            if (Math.abs(input[i] - input[j]) === 2) {
                input[i] > input[j] ?
                    pair.push(input[j], input[i]) :
                    pair.push(input[i], input[j])
            }
        }
        if (pair.length) {
            result.push(pair);
        }
    }
    return result;
}

console.log(twosDifference([1, 2, 3, 4]));