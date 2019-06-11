const konfinity = (num1, num2, num3) => {
  var max;

  if (num1 > num2 && num1 > num3) {
    max = num1;
  } else if (num2 > num1 && num2 > num3) {
    max = num2;
  } else {
    max = num3;
  }

  return max;
};
module.exports = konfinity;
