const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let answer = 0;
    for (let line of matrix) {
        answer += line.reduce((a, b) => a + (b === "^^" ? 1 : 0), 0)
    }
    return answer;
};