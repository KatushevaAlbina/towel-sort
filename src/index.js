
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  if (matrix.length == 0) {
    return [];
  }
  let result = [];
  matrix.forEach((arr, i) => {
    if (i % 2 == 0) {
      arr.forEach(element => {
        result.push(element);
      });
    } else {
      arr.reverse().forEach(element => {
        result.push(element);
      });
    }
  });
  return result;
}
