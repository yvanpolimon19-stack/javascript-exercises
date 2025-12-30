const convertToCelsius = function(tempf) {
  tempf = (tempf - 32) * (5/9);
  tempf = tempf.toFixed(2);
  tempf = parseFloat(tempf);
  return tempf

};

const convertToFahrenheit = function(tempc) {

  tempc = (tempc * (9/5)) + 32;
  tempc = tempc.toFixed(2);
  tempc = parseFloat(tempc);
  return tempc

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
