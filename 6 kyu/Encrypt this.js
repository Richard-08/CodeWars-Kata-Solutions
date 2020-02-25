/* Description:
Acknowledgments:

I thank yvonne-liu for the idea and for the example tests :)
Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter needs to be converted to its ASCII code.
        The second letter needs to be switched with the last letter
    Keepin' it simple: There are no special characters in input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo" */


/* ///////////////////////// Solution /////////////////////////// */


const encryptThis = (text) => {
    return text.split(' ').map(v => v.split('').map((value, index) => {
        if (index === 0) {
            return v.charCodeAt(value);
        } else if (index === 1) {
            return v[v.length - 1];
        } else if (index === v.length - 1) {
            return v[1];
        } else {
            return value;
        }
    }).join('')).join(' ');
}

console.log(encryptThis("Hello")) // === "72olle");
console.log(encryptThis("good")) // === "103doo");
console.log(encryptThis("hello world")) // === "104olle 119drlo");


/* const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' '); */