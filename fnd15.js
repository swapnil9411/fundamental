const konfinity = (num1, num2) => {
  var sum = num1 + num2;
  var output;

  if (sum >= 50 && sum <= 80) {
    output = 65;
  } else {
    output = 80;
  }

  return output;
};
module.exports = konfinity;
