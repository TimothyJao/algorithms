function numberOfWaysToMakeChange(n, denoms) {
    const ways = (new Array(n + 1)).fill(0)
    ways[0] = 1;
    for (let j = 0; j < denoms.length; j++) {
        for (let i = 0; i <= n; i++) {
            if (denoms[j] <= i) {
                ways[i] += ways[i - denoms[j]]
            }
        }
    }
    return ways[n]
}