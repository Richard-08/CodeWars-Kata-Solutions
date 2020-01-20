/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case */

///////////////////// Solution //////////////////////

function isIsogram(str){
    return str.toLowerCase()
              .split('')
              .filter((value, index) => str.toLowerCase().lastIndexOf(value) !== index)
              .length > 0 ? false : true;
  }