const konfinity = () => {
  var s1 = 79,
    s2 = 40,
    s3 = 56,
    s4 = 98,
    s5 = 20;
  var total = s1 + s2 + s3 + s4 + s5;
  var percent = (total * 100) / 500;

  return percent;
};


console.log(konfinity());

module.exports = konfinity;
