/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

///////////////////// Solution //////////////////////

function generateHashtag (str) {
    if (str === '') {
      return false;
    }
  
    const arr = str.split(' ').filter(value => value !== '').map(word => word[0].toUpperCase() + word.substr(1)).join('');
  
    return arr.length >= 140 || arr === '' ? false : `#${arr}`;
  }

///////////////////// Solution //////////////////////

  function generateHashtag (str) {
    if (str === '' || str === " ") {
      return false;
    }
  
    const arr = str.split(' ').filter(value => value !== '').map(word => word[0].toUpperCase() + word.substr(1)).join('');
    
    return arr.length >= 140 || arr.length === 0 ? false : `#${arr}`;
  }