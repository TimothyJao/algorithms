function recoverTree(root) {
  let x = null, y = null, predecessor = null, pred = null;

  while (root) {
    if (root.left) {
      predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }
      if (!predecessor.right) {
        predecessor.right = root;
        root = root.left;
      } else {
        if (pred && root.val < pred.val) {
          y = root;
          if (!x) {
            x = pred;
          }
        }
        pred = root;
        predecessor.right = null;
        root = root.right;
      }
    } else {
      if (pred && root.val < pred.val) {
        y = root;
        if (!x) {
          x = pred;
        }
      }
      pred = root;
      root = root.right;
    }
  }

  let temp = x.val;
  x.val = y.val;
  y.val = temp;
}