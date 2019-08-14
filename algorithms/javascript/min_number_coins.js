function minNumberOfCoinsForChange(n, denoms) {
    let ways = (new Array(n + 1)).fill(Infinity);
    ways[0] = 0;

    for (let i = 0; i < denoms.length; i++) {
        for (let j = 0; j <= n; j++) {
            if (denoms[i] <= j) {
                ways[j] = Math.min(ways[j], ways[j - denoms[i]] + 1)
            }
        }
    }
    return ways[n] === Infinity ? -1 : ways[n]
}
