/* Write the method Object#iterate that given an object takes a function as argument and an optional count n.

If n is not given, it returns an Iterator that yields the successive application of the function on the object indefinitely.

If n is given the iterator yields n values and then closes.

Example:

"str".iterate( s => s+s , 3 ) // => ["str", "strstr", "strstrstrstr"]

Notes:

    In the Iterator, the function must be called with the arguments (value,index), like Array#map and friends do. index = 0, 1, 2, .. n or just forever
    Your method must not be enumerable. */


////////////////////////////Solution////////////////////////////

let iterate = {
    value: function(fn, n=Infinity) {
      let current = this.valueOf();
      return {
        index: 0,
        next() {
          let done = n <= this.index;
          let value = current;
          if(!done) current = fn(current, this.index++);
          return {done, value};
        },
        [Symbol.iterator]() {return this}
      };
    }
    , enumerable: false
  };
  
  Object.defineProperty(Object.prototype, "iterate", iterate);