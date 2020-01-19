/* Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

Note: there will always be at least 1 string; all inputs will be non-empty.

For example:

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?" */

////////////////////////////Solution////////////////////////////

function createMessage(str) {
    return function(str2) {
      if (!str2) {
        return str;
      }
      return createMessage(`${str} ${str2}`);
    }
  }