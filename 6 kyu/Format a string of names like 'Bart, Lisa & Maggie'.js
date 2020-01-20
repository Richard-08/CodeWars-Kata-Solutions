/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
 */

///////////////////// Solution //////////////////////

function list(arr){
    let str = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === arr[arr.length - 1].name) {
      str += `${arr[i].name}`;
    } else if (arr[i].name === arr[arr.length - 2].name) {
      str += `${arr[i].name} & `;
    } else {
      str += `${arr[i].name}, `;
    }
  }
  return str;
}