/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const num = digits.join("")
    let plus = BigInt(num) + 1n;

    return plus.toString().split("").map(x => +x)
};