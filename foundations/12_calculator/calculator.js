const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, value) => sum + value, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, value) => product * value, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 1; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
