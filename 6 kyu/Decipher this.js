/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go' */



/* ///////////////////////// Solution /////////////////////////// */


const decipherThis = (str) => {
    return str.split(' ')
            .map(word => word
                .replace(/(^[0-9]*)(\w)?(\w*)?(\w$)/, `$1$4$3$2`)
                .replace(/^[0-9]*/, String.fromCharCode(parseInt(word.match(/^[0-9]*/)))))
                .join(' ');
}

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'


//
const decipherThis = (str) => {
    return str.split(' ')
            .map(word => word
                .replace(/(^[0-9]*)(\w)?(\w*)?(\w$)/, `$1$4$3$2`)
                .replace(/^[0-9]*/, l => String.fromCharCode(l)))
                .join(' ');
}