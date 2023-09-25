function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {

  if (typeof number !== 'number') {
    throw new Error('Please enter a number');
  } else if (number % 2 !== 0) {
    return true;
  }
  return false;
  
}

function myRange(min, max, step = 1) {
  let newRange = [];
  for (let i = min; i <= max; i +=step) {
    newRange.push(i);
  }
  return newRange;
}


module.exports = { isFive, isOdd, myRange };