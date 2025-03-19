/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()

    for(let item of nums){
        map.set(item,(map.get(item) || 0)+1)
        if(map.get(item) > nums.length /2 ){
            return item
        }
    }
};