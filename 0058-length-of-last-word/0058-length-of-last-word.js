/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const wordArray = s.trim().split(" ");
    const lastWordLength = wordArray[wordArray.length - 1].length;

    return lastWordLength;
};