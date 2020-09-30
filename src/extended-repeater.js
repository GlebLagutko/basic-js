const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator !== undefined ? options.separator : '+';
    let addition = options.addition !== undefined ? options.addition : '';
    let additionRepeatTimes = options.additionRepeatTimes || 1;

    let additionString = '';
    for (let i = 0; i < additionRepeatTimes; i++) {
        if (i === additionRepeatTimes - 1) {
            additionString += addition;
        } else {
            additionString += addition + additionSeparator;
        }
    }
    let answer = '';
    for (let i = 0; i < repeatTimes; i++) {
        if (i === repeatTimes - 1) {
            answer += str + additionString;
        } else {
            answer += str + additionString + separator;
        }
    }
    return answer;
};
