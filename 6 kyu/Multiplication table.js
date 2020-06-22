/* Description:

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9

for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 */

const multiplicationTable = (n) => {
    let result = [];
    for (let i = 1; i <= n; i += 1) {
        let arr = [];
        for (let j = 1; j <= n; j += 1) {
            arr.push(i * j);
        }
        result.push(arr);
    }
    return result;
}

console.log(multiplicationTable(5)); //[[1,2,3], [2,4,6], [3,6,9]]
