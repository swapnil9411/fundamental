const konfinity = (num1, num2, num3) => {
  var output;

  if (num1 > 0 && num2 > 0 && num3 > 0) {
    if (
      num1 % 10 === num2 % 10 &&
      num2 % 10 === num3 % 10 &&
      num1 % 10 === num3 % 10
    ) {
      output = true;
    } else {
      output = false;
    }
  } else {
    output = false;
  }

  return output;
};
module.exports = konfinity;
