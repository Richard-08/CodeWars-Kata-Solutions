/* Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]] */

////////////////////////////Solution////////////////////////////

var flatten = function (array){
    return [].concat(...array);
  }

////////////////////////////Solution////////////////////////////

var flatten = function (array){
    let newArr = [];
    for (let i = 0; i < array.length; i += 1) {
      if (!Array.isArray(array[i])) {
        return array;
      }
      for (let j = 0; j < array[i].length; j += 1) {
        newArr.push(array[i][j]);
      }
    }
    return newArr;
  }