/* Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)

Should yield the same result as

d(c(b(a(input)))) */


////////////////////////////Solution////////////////////////////

function chained(functions) {
    return function (input) {
      for (let i = 0; i < functions.length; i += 1) {
        input = functions[i](input);
      }
      return input;
    }
  }