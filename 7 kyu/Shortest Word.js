 /* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

///////////////////// Solution //////////////////////

function findShort(s) {
    let result = s.length;
    let count = 0;
    for (let i = 0; i <= s.length; i += 1) {
      if (s[i] === ' ' || s[i] === undefined) {
        if (result > count) {
          result = count;
        }
        count = 0;
      }
      else {
        count += 1;
      }
    }
    return result;
  }