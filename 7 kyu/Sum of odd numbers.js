/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8 */

///////////////////// Solution //////////////////////

function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}

///////////////////// Solution //////////////////////

function rowSumOddNumbers(num) {
	if (num === 1) {
    return 1;
  }
  let result = 0;
  let count = 0;
  for (let i = 2; count < num - 1; i += 2) {
    count += 1;
    result += i;
  }
  result += 1;
  
  let a = result;
  let countOdd = 0;
  let resultSum = result; 
  while (countOdd < num - 1) {
    a += 2;
    countOdd += 1;
    resultSum += a;

  }
  return resultSum;
}