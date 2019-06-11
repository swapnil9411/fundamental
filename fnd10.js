const konfinity = (num1, num2) => {
  var output;

  if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
    output = true;
  } else {
    output = false;
  }

  return output;
};
module.exports = konfinity;
