function findClosestValueInBst(tree, target) {
    closest = Infinity;

    while (tree) {
        if (tree.value === target) {
            return target
        }

        if (Math.abs(target - tree.value) < Math.abs(target - closest)) { closest = tree.value }

        if (target < tree.value) { tree = tree.left }
        else { tree = tree.right }
    }

    return closest
}
