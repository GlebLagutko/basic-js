const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr))
        throw new Error();

    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                if (i < arr.length - 1) answer.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (i && arr[i - 2] !== '--discard-next') answer.push(arr[i - 1]);
                break;
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (answer.length && arr[i - 2] !== '--discard-next') answer.pop();
                break


            default:
                answer.push(arr[i]);
        }
    }

    return answer;
};


