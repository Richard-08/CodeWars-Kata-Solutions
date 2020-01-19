/* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta' */

////////////////////////////Solution////////////////////////////

function removeDuplicateWords (s) {
    const arr = s.split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr.join(' ');
  }