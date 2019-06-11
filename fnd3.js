const konfinity = C => {
  //var C =prompt("Enter temperature in Celsius");

  var F;

  F = (C * 9) / 5 + 32;

  //console.log("Temperature in Fahrenheit is ", F);
  return F;
};
//console.log(konfinity());

module.exports = konfinity;
