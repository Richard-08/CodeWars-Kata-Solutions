/* Description:

Implement a function which behaves like the uniq command in UNIX.

It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been 
reduced to one instance.

Example:

['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c'] */

function uniq(a) {
    let result = [];

    for (let i = 0; i < a.length; i += 1) {
        if (a[i] !== result[result.length - 1]) {
            result.push(a[i]);
        } else if (a[i] === undefined) {
            result.push(undefined);
        }
    }
    return result;
}

/* console.log(uniq(['a', 'a', 'b', 'b', 'c', 'a', 'a', 'b', 'c'])); */ // ['a','b','c','a','b','c']
console.log(uniq([undefined, 'a', 'a'])); // [undefined, 'a']

