function maxPathSum(root){
    let max = -Infinity;
    dfs(root);
    return max;

    function dfs(root){
        if(!root) return 0;

        const left = dfs(root.left);
        const right = dfs(root.right);
        const currSum = Math.max(root.val, root.val + left, root.val + right, root.val + right + left);

        max = Math.max(max, currSum);

        return Math.max(root.val, root.val + left, root.val + right);
    }
}