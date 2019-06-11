const konfinity = (num1, num2, num3) => {
  var output;

  if (
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99)
  ) {
    output = true;
  } else {
    output = false;
  }

  return output;
};
module.exports = konfinity;
