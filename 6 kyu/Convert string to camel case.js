/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */

///////////////////// Solution //////////////////////

function toCamelCase(str){
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] !== '-' && str[i] !== '_') {
        if (str[i - 1] === '-' || str[i - 1] === '_') {
          result += str[i].toUpperCase();
        }
        else {
          result += str[i];
        }
      }
    }
    return result;
  }