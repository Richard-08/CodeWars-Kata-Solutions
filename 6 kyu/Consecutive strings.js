/* Description:

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k 
consecutive strings taken in the array.
Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
Note

consecutive strings : follow one after another without an interruption
 */


const longestConsec = (arr, n) => {
    if (arr.length < n || n <= 0 || arr.length == 0) {
        return '';
    }

    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        newArr.push(arr.slice(i, n + i));
    }
    let arr2 = newArr.map(v => v.join(''));
    let max = ''
    for (let j = 0; j < arr2.length; j += 1) {
        if (arr2[j].length > max.length) {
            max = arr2[j];
        }
    }
    return max;
}


function longestConsec(strarr, k) {
    var longest = "";
    for(let i = 0; k > 0 && i <= strarr.length - k; i += 1) {
      let tempArray = strarr.slice(i, i + k);
      let tempStr = tempArray.join("");
      if (tempStr.length > longest.length) {
        longest = tempStr;
      }
    }
    return longest;
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));