/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    return (parseInt(BigInt(a), 2n) + parseInt(BigInt(b), 2n)).toString(2)
};