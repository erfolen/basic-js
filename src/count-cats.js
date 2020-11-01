const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix.length == 0) {
    return 0 ;
  } 
  //let arrMat = matrix.flat(3);
  let arrMat = matrix.reduce((acc, val) => acc.concat(val));
  let arrCats = arrMat.filter(cat => cat == '^^');
  return arrCats.length;
};
