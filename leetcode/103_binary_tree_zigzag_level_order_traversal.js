function zigzagLevelOrder(root) {
  if (!root) {
    return [];
  }

  let output = [];
  let queue = [root];
  let isZig = true;

  while (queue.length > 0) {
    let row = [];
    let length = queue.length;

    while (length > 0) {
      let current = queue.shift();
      row.push(current.val);

      if (current.right) {
        queue.push(current.right);
      }

      if (current.left) {
        queue.push(current.left);
      }
      length--;
    }

    if (isZig) {
      row.reverse();
    }

    isZig = !isZig;
    output.push(row);
  }

  return output;
}