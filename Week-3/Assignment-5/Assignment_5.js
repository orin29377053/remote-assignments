function twoSum(nums, target) {
    let map = new Map();
    let value;
    for (let i = 0; i < nums.length; i++) {
        value = target - nums[i];
        if (map.has(value)) {
            return [map.get(value), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return -1
    // your code here
}

/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
   */

