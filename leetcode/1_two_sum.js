function twoSum(nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] >= 0) return [i, hash[target - nums[i]]].sort();
        else hash[nums[i]] = i;
    }
}