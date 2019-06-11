const konfinity = (num1, num2) => {
  var sum;

  if (num1 === num2) {
    sum = 6 * num1;
  } else {
    sum = num1 + num2;
  }

  return sum;
};
module.exports = konfinity;
