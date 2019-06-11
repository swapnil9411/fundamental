const konfinity = (b, p) => {
  function compare(base, per) {
    var tri = 0.5 * base * per;
    var square = base * base;
    if (square >= tri) {
      return square;
    } else {
      return tri;
    }
  }
  var output = compare(b, p);

  return output;
};
module.exports = konfinity;
