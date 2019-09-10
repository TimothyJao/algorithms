function longestStringWithout3ConsecutiveChars(a, b, c) {
    const heap = new MaxHeap([["a",a], ["b",b],["c",c]]);
    let result = '';
    while (true){
        let [char, count] = heap.remove();
        if (count === 0) return result;
        const len = result.length;
        if (result[len - 2] === char && result[len - 1] === char) {
            let [nextChar, nextCount] = heap.remove();
            if (nextCount === 0) return result;
            result += nextChar + char;
            heap.insert([nextChar, nextCount - 1]);
            heap.insert([char, count - 1]);
        } else {
            result += char;
            heap.insert([char, count - 1]);
        }
    }
}

class MaxHeap{
    constructor(array) {
        this.heap = this.buildHeap(array)
    }

    buildHeap(array) {
        const firstParentIdx = Math.floor((array.length - 2) / 2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length - 1, array);
        }
        return array;
    }

    siftDown(currentIdx, endIdx, heap) {
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let idxToSwap;
            if (childTwoIdx !== -1 && heap[childTwoIdx][1] > heap[childOneIdx][1]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx
            }
            if (heap[idxToSwap][1] > heap[currentIdx][1]) {
                this.swap(currentIdx, idxToSwap, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return
            }
        }
    }

    siftUp(currentIdx, heap) {
        let parentIdx = Math.floor((currentIdx - 1) / 2)
        while (currentIdx > 0 && heap[currentIdx][1] > heap[parentIdx][1]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2)
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap);
        const valueToRemove = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return valueToRemove;
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap)
    }

    swap(i, j, heap) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }
}

console.log(longestStringWithout3ConsecutiveChars(1,1,1000))