const konfinity = num => {
  //num=13;
  var diff;

  if (num < 13) {
    diff = 13 - num;
  } else {
    diff = 2 * (num - 13);
  }

  return diff;
};
//console.log(diff);
module.exports = konfinity;
