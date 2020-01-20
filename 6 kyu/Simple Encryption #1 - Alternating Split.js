/* For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)

For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text. */

///////////////////// Solution //////////////////////

const encrypt = (str, n) => {

    if(str === '' || str === null || n <= 0) {
      return str;
    }
  
    const arr = str.split('');
    const secondValues = arr.filter((arr, index)  => index % 2 !== 0);
    const anotherValues = arr.filter((arr, index) => index % 2 === 0);
  
    if (n === 1) {
      return secondValues.join('') + anotherValues.join('');
    } else {
      return encrypt(secondValues.join('') + anotherValues.join(''), n - 1);
    }
  }
  
  
  const decrypt = (str, n) => {
  
    if(str === '' || str === null || n <= 0) {
      return str;
    }
  
  const firstHalf = str.slice(0, str.length / 2).split('');
  const secondHalf = str.slice(str.length / 2).split('');
  let result = '';
  for (let i = 0; i < secondHalf.length; i += 1) {
    result += secondHalf[i];
    if (firstHalf[i] !== undefined) {
      result += firstHalf[i];
    }
  }
  
  if (n == 1) {
    return result;
  } else {
    return decrypt(result, n - 1);
  }
  }