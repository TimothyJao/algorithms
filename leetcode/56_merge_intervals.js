var merge = function (intervals) {
    if (intervals.length === 0) return [];
    let heap = new MinHeap(intervals);
    let result = [];
    let start;
    let end;

    while (heap.length() !== 0) {
        let interval = heap.remove();
        if (start === undefined && end === undefined) {
            start = interval[0];
            end = interval[1];
        } else if (interval[0] <= end && interval[1] >= end) {
            end = interval[1];
        } else if (interval[0] > end) {
            result.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }
    result.push([start, end]);
    return result;
};

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array)
    }

    buildHeap(array) {
        let firstParent = Math.floor((array.length - 2) / 2);
        for (let i = firstParent; i >= 0; i--) {
            this.siftDown(i, array.length - 1, array);
        }
        return array;
    }

    siftDown(current, end, heap) {
        let firstChild = current * 2 + 1;
        while (firstChild <= end) {
            const secondChild = current * 2 + 2 <= end ? current * 2 + 2 : -1;
            let nextIdx;
            if (secondChild !== -1 && heap[secondChild][0] < heap[firstChild][0]) {
                nextIdx = secondChild;
            } else {
                nextIdx = firstChild;
            }
            if (heap[current][0] <= heap[nextIdx][0]) { return; }
            this.swap(current, nextIdx, heap);
            current = nextIdx;
            firstChild = current * 2 + 1;
        }

    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap);
        let value = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return value;
    }

    length() {
        return this.heap.length;
    }

    swap(current, next, array) {
        let temp = array[current];
        array[current] = array[next];
        array[next] = temp;
    }
}