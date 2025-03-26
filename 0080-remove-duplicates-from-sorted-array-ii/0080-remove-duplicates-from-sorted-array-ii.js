/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let m = 0;

    for (let i = 0; i < nums.length; i++) {
        if (m < 2 || nums[i] !== nums[m - 2]) {
            nums[m] = nums[i];
            m++
        }
    }
    
    return m
};

