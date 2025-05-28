const arrayUtils = {
    sum: arr => arr.reduce((a, b) => a + b, 0),
    unique: arr => [...new Set(arr)],
    max: arr => Math.max(...arr),
    min: arr => Math.min(...arr),
    average: arr => arr.reduce((a, b) => a + b, 0) / arr.length,
    even: arr => arr.filter(n => n % 2 === 0),
    odd: arr => arr.filter(n => n % 2 !== 0),
    mapPlus: (arr, x) => arr.map(n => n + x),
    square: arr => arr.map(n => n * n),
    sortAsc: arr => [...arr].sort((a, b) => a - b)
  };
  
  module.exports = arrayUtils;