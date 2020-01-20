/* You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 */

///////////////////// Solution //////////////////////

function twoSort(s) {
    return firstSort = s.sort()[0].split('').join('***');
  }


///////////////////// Solution //////////////////////

function twoSort(arr) {
    const firstSort = arr.sort().filter((value, index) => index === 0).join('');
    let secondSort = '';
    for (let i = 0; i < firstSort.length; i += 1) {
      if (i !== 0) {
        secondSort += '***' + firstSort[i];
      } else {
        secondSort += firstSort[i];
      }
    }
    return secondSort;
  }