/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number */
 
///////////////////// Solution //////////////////////

function persistence(num) {
    if (num < 10) {
    return 0;
  }
  const current = (num, acc) => {
    let result = 1;
    const str = String(num);
    for (let i = 0; i < str.length; i++) {
      result *= Number(str[i]);
    }
    if (result < 10) {
      return acc;
    } else {
      return current(result, acc + 1);
    }
  }
  return current(num, 1);
}