let konfinity = i => {
  var output;

  if (i % 4 === 0 && i % 100 !== 0) {
    output = 1;
  } else if (i % 100 === 0 && i % 400 === 0) {
    output = 1;
  } else {
    output = 0;
  }

  return output;
};
module.exports = konfinity;
