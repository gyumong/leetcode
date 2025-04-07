/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numObject = {}
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        let match = target - temp;

        if (match in numObject) {
            return [i, numObject[match]]
        } else {
            numObject[temp] = i
        }
    }
};