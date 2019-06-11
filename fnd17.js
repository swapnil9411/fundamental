const konfinity = (a, b, c) => {
  var output;
  switch (c) {
    case 1:
      output = a + b;
      break;
    case 2:
      output = a - b;
      break;
    case 3:
      output = a * b;
      break;
    case 4:
      output = a / b;
      break;
    default:
      output = "Wrong Operator";
  }

  return output;
};
module.exports = konfinity;
