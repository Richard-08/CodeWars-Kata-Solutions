/* Description:

You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. 
Did you notice that *"the"* is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like *"as"* at the beginning of the sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other count as one.

Example:

"dog cat"                 --> 0
"dog DOG cat"             --> 1
"apple dog cat"           --> 0
"pineapple apple dog cat" --> 0
"apple     apple dog cat" --> 1
"apple dog apple dog cat" --> 0
"dog dog DOG dog dog dog" --> 1
"dog dog dog dog cat cat" --> 2
"cat cat dog dog cat cat" --> 3 */

function countAdjacentPairs(searchString) {
    let count = 0;
    const arr = searchString.toLowerCase().replace(/\s{2,}/g, ' ').split(' ');
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] === arr[i - 1] && arr[i] !== arr[i + 1]) {
            count += 1;
        }
    }
    return count;
}

console.log(countAdjacentPairs('abS abs abs bOoL OrD Ord ord input ord ord Ord Open opEn oPen oPeN dIVmOD tupLE enUMerate ENUmeRatE enuMerAte bytEaRray'));

/* Test.assertEquals(countAdjacentPairs(''), 0)
Test.assertEquals(countAdjacentPairs('orange Orange kiwi pineapple apple'), 1)
Test.assertEquals(countAdjacentPairs('banana banana banana'), 1)
Test.assertEquals(countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!'), 2)
Test.assertEquals(countAdjacentPairs('pineapple apple'), 0); */