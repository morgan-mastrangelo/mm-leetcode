let root = [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1, null, 1];

var longestZigZag = function (root) {
    const ans = { val: 0 };
    dfs(root, ans);

    return ans.val;
};

function dfs(root, ans) {
    if (!root) return [-1, -1];

    const [_, rightVal] = dfs(root.left, ans);
    const [leftVal, __] = dfs(root.right, ans);

    const takeLeft = 1 + rightVal;
    const takeRight = 1 + leftVal;
    ans.val = Math.max(ans.val, takeLeft, takeRight);

    return [takeLeft, takeRight];
}

console.log(longestZigZag(root));
