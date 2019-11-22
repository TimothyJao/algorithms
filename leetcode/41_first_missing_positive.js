function firstMissingPositive(nums) {
    let hash = {};
    let max = 0;
    nums.forEach(num => {
        hash[num] = 1;
        max = Math.max(max, num);
    })

    if (max < 0) return 1;

    for (let i = 1; i <= max + 1; i++) {
        if (!hash[i]) return i;
    }
}