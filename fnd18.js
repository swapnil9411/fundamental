const konfinity = (num1, num2) => {
  function check8(a, b) {
    if (a === 8 || b === 8) {
      return true;
    } else if (a + b === 8) {
      return true;
    } else {
      return false;
    }
  }

  var output = check8(num1, num2);
  return output;
};
module.exports = konfinity;
