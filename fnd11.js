const konfinity = num => {
  var output;

  if (num % 3 === 0 || num % 7 === 0) {
    output = true;
  } else {
    output = false;
  }

  return output;
};
module.exports = konfinity;
