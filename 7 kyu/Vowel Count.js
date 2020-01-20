/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
 */

///////////////////// Solution //////////////////////

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter((value) => vowels.indexOf(value) > -1).length;
  }

///////////////////// Solution //////////////////////

function getCount(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i += 1) {
      if (vowels.indexOf(arr[i]) > -1) {
        count += 1;
      }
    }
    return count;
  }