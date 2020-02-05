var postorderTraversal = function (root) {
    if (!root) return [];

    var result = [], stack = [root];

    while (stack.length) {
        var node = stack.pop();
        // insert the node val to the front
        result.unshift(node.val);

        if (node.left) stack.push(node.left); // left first
        if (node.right) stack.push(node.right); // then right
    }

    return result;
};