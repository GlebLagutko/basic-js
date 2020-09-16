const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
  if (!Array.isArray(members)) { return false; }
  members.forEach( (name, i) => {
    (typeof name === "string") ? members[i] = name : delete members[i];
  });
  return members.map(x => x = x.trim().charAt(0).toUpperCase()).sort().reduce((a,b) => a + b,"");
};
