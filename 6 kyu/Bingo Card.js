function genRange(arr, letter, start, end, count) {
    var taken = [];
    for(var i = 0; i < count; ) {
      r = Math.floor(Math.random() * (end - start) + start);
      if(taken.indexOf(r) == -1) {
        taken.push(r);
        arr.push(letter + r);
        i++;
      }
    }
  }
  function getCard()
  {
    var arr = [];
    genRange(arr, "B", 1, 15, 5);
    genRange(arr, "I", 16, 30, 5);
    genRange(arr, "N", 31, 45, 4);
    genRange(arr, "G", 46, 60, 5);
    genRange(arr, "O", 61, 75, 5);
    return arr;
  }

console.log(getCard());