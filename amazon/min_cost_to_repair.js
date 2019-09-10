function minimumSpanningTree(n, edges, edgesToRepair) {
    let edgeReplace = {}
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        edgeReplace[edge] = 0;
    }

    for(let i = 0; i < edgesToRepair.length; i++){
        let edge = edgesToRepair[i];
        edgeReplace[[edge[0], edge[1]]] = edge[2];
    }


    console.log(edgeReplace)

    let graph = {};

    for (let i = 1; i < n + 1; i++) {
        graph[i] = [];
    }

    let edgesKeys = Object.keys(edgeReplace);

    for (let i = 0; i < edgesKeys.length; i++) {
        let edge = edgesKeys[i];
        let value = edgeReplace[edge]
        graph[edge[0]].push([edge[2], value]);
        graph[edge[2]].push([edge[0], value]);
    }


    let visited = {};
    let heap = new MinHeap([[n, 0]]);

    let total = 0;

    while (heap.size() > 0 && Object.keys(visited).length < n) {
        let edge = heap.remove();
        if (!visited[edge[0]]) {
            visited[edge[0]] = true;
            total += edge[1]
            let currentEdges = graph[edge[0]]
            for (let i = 0; i < currentEdges.length; i++) {
                heap.insert(currentEdges[i])
            }
        }
    }
    if (Object.keys(visited).length === n) return total;
    else return -1;

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
            if (childTwoIdx !== -1 && heap[childTwoIdx][1] < heap[childOneIdx][1]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx
            }
            if (heap[idxToSwap][1] < heap[currentIdx][1]) {
                this.swap(currentIdx, idxToSwap, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return
            }
        }
    }

    size() {
        return this.heap.length;
    }

    siftUp(currentIdx, heap) {
        let parentIdx = Math.floor((currentIdx - 1) / 2)
        while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2)
        }
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap)
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

let edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]];
let newEdges = [[1, 2, 12], [3, 4, 30], [1, 5, 8]]
let n = 5;

console.log(minimumSpanningTree(n, edges, newEdges))