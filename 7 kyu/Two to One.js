/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

    each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

///////////////////// Solution //////////////////////

 function longest(a, b) {
    let newStr = a.concat(b);
    return newStr.concat(b)
                  .split('')
                  .filter((value, index) => newStr.lastIndexOf(value) == index)
                  .sort()
                  .join('');
  }