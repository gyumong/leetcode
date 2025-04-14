/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    let reverse = x.toString().split("").reverse().join("")

    if (x == reverse) return true
    return false
};