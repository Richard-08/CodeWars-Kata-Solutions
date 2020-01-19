/* Write a function reverse which reverses a list (or in clojure's case, any list-like data structure) */

////////////////////////////Solution////////////////////////////

reverse = function(array) {
    let newArr = [];
    array.forEach(value => {
    newArr.unshift(value);
    })
    return newArr;
   }