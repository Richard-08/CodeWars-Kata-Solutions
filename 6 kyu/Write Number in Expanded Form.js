/* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0. */

///////////////////// Solution //////////////////////

function expandedForm(n) {
    let result = [];
    let digit = 0;
    let divisor = 10;
    const length = String(n).length;
    for (let i = 0; i < length; i += 1) {
      digit = n % divisor;
      if (digit !== 0) {
        result.push(digit);
      }
      divisor = divisor * 10;
      n = n - digit;
    }
    return result.reverse().join(' + ');
  }