const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
    let sample_activity = parseFloat(sampleActivity);
    if(sampleActivity > MODERN_ACTIVITY || typeof sampleActivity !== 'string' || parseFloat(sampleActivity) <= 0 || isNaN(sample_activity)){
        return false;
    }else{
        let k = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
        return Math.ceil(Math.log(MODERN_ACTIVITY / sample_activity) / k);
    }
};
