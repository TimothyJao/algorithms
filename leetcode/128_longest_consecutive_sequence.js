function longestConsecutive(nums) {
    let max = 0;
    let lens = {};

    for (let n of nums) {
        if (lens[n] !== undefined) continue;

        const l = lens[n - 1] || 0;   // left length
        const r = lens[n + 1] || 0;   // right length

        const len = l + r + 1;

        // extend the length to the boundaries
        lens[n - l] = len;
        lens[n] = len;
        lens[n + r] = len;

        max = Math.max(max, len);
    }

    return max;
}