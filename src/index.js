module.exports = function getZerosCount(number) {
    let sumZero = 0;
    let countZero;

    for (n = 1; countZero != 0; n++) {
        countZero = Math.floor(number / Math.pow(5, n));
        sumZero = sumZero + countZero;
    }
    return sumZero;
}