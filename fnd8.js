const konfinity = (num1, num2) => {
  var output;

  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    output = true;
  } else {
    output = false;
  }

  return output;
};
module.exports = konfinity;
