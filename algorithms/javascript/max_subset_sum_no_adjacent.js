function maxSubsetSumNoAdjacent(array) {
    let current_max = 0;
    let last_max = 0;
    let prev_last_max = 0;

    for (let i = 0; i < array.length; i++) {
        prev_last_max = last_max;
        last_max = current_max;
        current_max = Math.max(prev_last_max + array[i], current_max)
    }

    return current_max;
}