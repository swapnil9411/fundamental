const konfinity = i => {
  var output;
  switch (i) {
    case 1:
      output = "East";
      break;
    case 2:
      output = "West";
      break;
    case 3:
      output = "North";
      break;
    case 4:
      output = "South";
      break;
    default:
      output = "Wrong Input";
  }

  return output;
};
module.exports = konfinity;
