function kNearest(current, post_offices, k){
    let distances = [];
    for(let i = 0; i < post_offices.length; i++){
        let x = current[0] - post_offices[i][0];
        let y = current[1] - post_offices[i][1];

        let square_root = Math.sqrt(Math.pow(x, 2) + Math.pow(y,2))
        distances.push([square_root, i])
    }

    let heap = new MinHeap(distances);
    let result = [];

    for(let i = 0; i < k; i++){
        let value = heap.remove()
        result.push(post_offices[value[1]])
    }

    return result
}



class MinHeap {
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
            if (childTwoIdx !== -1 && heap[childTwoIdx][0] < heap[childOneIdx][0]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx
            }
            if (heap[idxToSwap][0] < heap[currentIdx][0]) {
                this.swap(currentIdx, idxToSwap, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return
            }
        }
    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap);
        const valueToRemove = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return valueToRemove;
    }

    swap(i, j, heap) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }
}

console.log(k_nearest([0, 0], [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]], 3))