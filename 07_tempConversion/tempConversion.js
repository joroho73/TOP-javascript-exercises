const convertToCelsius = function(far) {
  let cel = 0.0;
  cel = (far - 32)*(5/9);
  cel = cel.toFixed(1)
  console.log(cel);
  return parseFloat(cel);
};

const convertToFahrenheit = function(cel) {
  let far = 0.0
  far = (cel*(9/5)+32);
far = far.toFixed(1);
  console.log(far);
  return parseFloat(far);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

convertToCelsius(100);
convertToFahrenheit(100);
