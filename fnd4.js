  const konfinity = inr => {
  var usd;

  usd = ((1 / 75) * inr).toFixed(2);
  
  return usd;
};
//console.log(konfinity())

module.exports = konfinity;
