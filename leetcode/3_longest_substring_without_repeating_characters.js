function lengthOfLongestSubstring(s) {
    let hash = {};
    let longest = 0;
    let current = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] >= 0 && hash[s[i]] >= start) {
            longest = Math.max(current, longest)
            current = i - hash[s[i]];
            start = hash[s[i]] + 1;
        } else {
            current++;
        }
        hash[s[i]] = i;
    }

    return longest > current ? longest : current
}