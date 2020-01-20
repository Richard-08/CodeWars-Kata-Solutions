/* Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

Don't forget to rate this kata! Thanks :)
 */

///////////////////// Solution //////////////////////

String.prototype.camelCase = function(){
    return this.length > 0 ? 
    this.trim()
        .split(' ')
        .map((value, index) => value[0].toUpperCase() + value.substr(1))
        .join('') : '';
  }