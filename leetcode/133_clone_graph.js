var cloneGraph = function (node) {
    if (!node) return node;

    const seen = {};
    const copy = new Node(node.val, []);

    seen[node.val] = copy;
    dfs(node, seen, copy)

    return copy
};

var dfs = function (node, seen, copies) {
    for (let neighbor of node.neighbors) {
        if (!seen[neighbor.val]) {
            const copy = new Node(neighbor.val, []);
            seen[neighbor.val] = copy;
            copies.neighbors.push(copy);
            dfs(neighbor, seen, copy);
        } else {
            copies.neighbors.push(seen[neighbor.val])
        }
    }
}