function climbStairs(n) {
  if (n === 0 || n === 1) return 1;
  let first = 1;
  let second = 1;
  let temp;
  let count = 2;
  while (count <= n) {
    temp = second;
    second += first;
    first = temp;
    count++;
  }
  return second;
}