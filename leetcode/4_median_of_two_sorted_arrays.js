function findMedianSortedArrays(input1, input2) {
    if (input1.length > input2.length) return findMedianSortedArrays(input2, input1);

    const x = input1.length, y = input2.length;
    let lo = 0, hi = x;

    while (lo <= hi) {
        let partitionX = (lo + hi) / 2 | 0,
            partitionY = (x + y + 1) / 2 - partitionX | 0;

        let maxLeftX = (partitionX === 0) ? -Infinity : input1[partitionX - 1];
        let minRightX = (partitionX === x) ? Infinity : input1[partitionX];

        let maxLeftY = (partitionY === 0) ? -Infinity : input2[partitionY - 1];
        let minRightY = (partitionY === y) ? Infinity : input2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            hi = partitionX - 1;
        } else {
            lo = partitionX + 1;
        }
    }
}