function calculateNumber (type, a, b) {
  if (type === 'SUM') {
    return (Math.round(a) + Math.round(b));
  } else if (type === 'SUBTRACT') {
    return (Math.round(a) - Math.round(b));
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
        return "Error";
    }
    return (Math.round(a) / Math.round(b));
  }
  
}

console.log(calculateNumber('DIVIDE', 7.5, 0));
module.exports = calculateNumber;
