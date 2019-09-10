
let max = -Infinity;
let maxNode = null;

class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }

    insert(node){
        this.children.push(node)
    }
}

function maximumAverageSubtree(root){
    if (root === null) return null;
    helper(root);
    return maxNode;
}

function helper(root) {
    if (root == null) return [0, 0];

    let curTotal = root.value;
    let count = 1;
    for (let i = 0; i < root.children.length; i++) {
        let child = root.children[i];
        let cur = helper(child);
        curTotal += cur[0];
        count += cur[1];
    }

    let avg = curTotal / count
    if (count > 1 && avg > max) {
        max = avg;
        maxNode = root;
    }
    return [curTotal, count]
}



let n1 = new Node(20);
let n2 = new Node(12);
let n3 = new Node(18);
let n4 = new Node(11);
let n5 = new Node(2);
let n6 = new Node(3);
let n7 = new Node(15);
let n8 = new Node(8);

n1.insert(n2);
n1.insert(n3);
n2.insert(n4);
n2.insert(n5);
n2.insert(n6);
n3.insert(n7);
n3.insert(n8);

console.log(maximumAverageSubtree(n1))