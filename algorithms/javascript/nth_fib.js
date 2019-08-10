function getNthFib(n) {
    two = [0, 1]
    if (n == 1 || n == 2) { return two[n - 1] }
    for (let i = 2; i < n; i++) {
        temp = two[0]
        two[0] = two[1]
        two[1] = two[0] + temp
    }
    return two[1]
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
