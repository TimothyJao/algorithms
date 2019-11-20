function generateParenthesis(n) {
    let result = [];
    compute(n, n, '');
    return result;

    function compute(left, right, str) {
        if (left === 0 && right === 0 && str.length > 0) result.push(str);
        if (left !== 0) compute(left - 1, right, str + '(');
        if (right > left) compute(left, right - 1, str + ')');
    }
}