/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let pastMax = Math.min(height[i], height[j]) * (j - i)
    while (i < j) {
        let max = Math.min(height[i], height[j]) * (j - i)
        if (pastMax < max) {
            pastMax = max
        }
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }

    return pastMax

};