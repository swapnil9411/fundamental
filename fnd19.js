const konfinity = (num1, num2, num3) => {
  function three_numbers(num1, num2, num3) {
    if (num1 === num2 && num2 === num3 && num1 === num3) {
      return 30;
    } else if (num1 === num2 || num2 === num3 || num3 === num1) {
      return 20;
    } else {
      return 40;
    }
  }

  var output = three_numbers(num1, num2, num3);
  return output;
};
module.exports = konfinity;
