function removeDuplicates(nums) {
    let currentIndex = 1;
    let count = 1;
    while (currentIndex < nums.length) {
        if (nums[currentIndex] !== nums[currentIndex - 1]) {
            nums[count] = nums[currentIndex];
            count++;
        }
        currentIndex++;
    }
    return count;
}