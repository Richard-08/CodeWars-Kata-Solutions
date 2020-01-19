/* Description:

Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi" */

////////////////////////////Solution////////////////////////////

function remove(s){
    const regExp = /(!+$)/;
    const regExp1 = /(!+)\s/g;
    return s.replace(regExp1, ' ').replace(regExp, '');
 }