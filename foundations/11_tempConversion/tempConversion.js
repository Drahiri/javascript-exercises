const convertToCelsius = function (fahrenheit) {
  const inCelsius = (fahrenheit - 32) * 5 / 9;
  return Math.round(inCelsius * 10) / 10;
};

const convertToFahrenheit = function () {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
