/* Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] */

///////////////////// Solution //////////////////////

var orderedCount = function (str) {
    return str.split('')
              .filter((value, index) => str.indexOf(value) == index)
              .map(value => [value, str.split(value).length - 1]);
  }