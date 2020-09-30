const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let max = 1;
        for (let elem of arr) {
            if (Array.isArray(elem)) {
                let current = this.calculateDepth(elem);
                if (current + 1 > max)
                    max = current + 1;
            }
        }

        return max;
    }
};