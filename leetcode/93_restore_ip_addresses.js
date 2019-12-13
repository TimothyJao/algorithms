function restoreIpAddresses(s) {
  const res = [];
  dfs([], 0);
  return res;
  function dfs(prefix, idx) {
    if (prefix.length === 4 && idx === s.length) {
      res.push(prefix.join('.'));
      return;
    }

    if (prefix.length === 4 || idx === s.length) {
      return;
    }

    for (let i = idx; i < idx + 3; i++) {
      if (i !== idx && s[idx] === '0') return;

      const num = parseInt(s.slice(idx, i + 1));
      if (num > 255) {
        return;
      }
      prefix.push(num);
      dfs(prefix, i + 1);
      prefix.pop();
    }
  }
}