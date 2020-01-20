/*     4 kyu
    1,086

7 kyu
Odd or Even?
1043889% of 2,4626,025 of 17,266ethaning
JavaScript

    Train Again
    Next Kata

    Details
    Solutions
    Forks (3)
    Discourse (84)

Task:

Given an vector of numbers, determine whether the sum of all of the numbers is odd or even.

Give your answer as a String matching 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).
Example:

odd_or_even(vec![0]) returns "even"
odd_or_even(vec![0, 1, 4]) returns "odd"
odd_or_even(vec![0, -1, -5]) returns "even"

Have fun */

///////////////////// Solution //////////////////////


function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
 }