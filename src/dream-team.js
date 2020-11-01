const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  arrBuk =[];
  if (!Array.isArray(members)) {
    return false;
  } else if (members.length == 0){
    return false;
  }
    for (let i = 0;i < members.length;i++) {
      let buk = members[i];
      if (!(typeof members[i] === 'string') || buk == '') {
         continue;
      } else {
        buk = buk.trim();
      }
    arrBuk.push(buk[0].toUpperCase());
   }
   return arrBuk.sort().join("");
};
