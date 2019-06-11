const konfinity = num => {
  var output;

  if ((num >= 80 && num <= 120) || (num >= 380 && num <= 420)) {
    output = true;
  } else {
    output = false;
  }

  return output;
};
module.exports = konfinity;
