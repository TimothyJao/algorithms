function minWindow(s, t) {
  let hash = {};
  for (let i = 0; i < t.length; i++) {
    hash[t[i]] ? hash[t[i]]++ : hash[t[i]] = 1;
  }

  let left = 0;
  let right = -1;
  let ans = "";
  let curr;
  let count = Object.keys(hash).length;

  while (right <= s.length) {
    if (count === 0) {
      curr = s[left];
      if (!ans || right - left + 1 < ans.length) {
        ans = s.slice(left, right + 1);
      }
      if (hash[curr] !== undefined) {
        hash[curr]++;
      }
      if (hash[curr] > 0) {
        count++;
      }
      left++;
    } else {
      right++;
      curr = s[right];
      if (hash[curr] !== undefined) {
        hash[curr]--;
      }
      if (hash[curr] === 0) {
        count--;
      }
    }
  }
  return ans;
}