const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let monthMy = date.getMonth();
    if (monthMy < 2 || monthMy == 11) {
    return 'winter';
  } else if (monthMy > 1 && monthMy < 5) {
    return 'spring';
  } else if (monthMy > 4 && monthMy < 8) {
    return 'summer';
  } else if (monthMy > 7 && monthMy < 11) {
    return 'autumn';
  } else {
    return 'Unable to determine the time of year!';
  }
};
