/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    function extraAlpabets(str) {
        return str.replace(/[^a-zA-Z0-9]/g, '')
    }
    const string = extraAlpabets(s).toLowerCase()

    let left = 0;
    let right = string.length - 1;

    if (right < 0) return true

    while (left < right) {
        if (string[left] === string[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
};