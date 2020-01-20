/* Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

None of the arrays will be empty, so you don't have to worry about that!
 */

///////////////////// Solution //////////////////////

function removeEveryOther(arr){
    //your code here
    return arr.filter((value, index) => index % 2 == 0); 
  }