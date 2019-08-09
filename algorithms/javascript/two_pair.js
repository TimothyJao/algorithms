function twoNumberSum(array, targetSum) {
    sum_hash = {}
    for (let i = 0; i < array.length; i++) {
        num = array[i]
        if (!sum_hash[num]) {
            sum_hash[targetSum - num] = num
        } else {
            if (num < sum_hash[num]) {
                return [num, sum_hash[num]]
            } else {
                return [sum_hash[num], num]
            }

        }
    }
    return []
}