const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let number = (sampleActivity);
    if (typeof sampleActivity !== "string" || sampleActivity <= 0
        || sampleActivity > MODERN_ACTIVITY || sampleActivity.match(/[a-zA-Z]/) !== null)
        return false;

    let k = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
    let years = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
    return Math.ceil(years);
};
