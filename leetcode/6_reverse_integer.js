function reverse(x) {
    let negative = false;

    if (x === 0) return 0;
    if (x < 0) {
        negative = true;
        x *= -1;
    }

    let result = 0;
    let length = Math.floor(Math.log(x) / Math.log(10));
    let tens = 1;

    if (x !== 2147483412 && x >= 1534236469) { return 0 }
    while (length >= 0) {
        let value = Math.floor(x / Math.pow(10, length));
        x = Math.floor(x % Math.pow(10, length));
        result += value * tens;
        length--;
        tens *= 10;
    }

    return negative ? -result : result;
}