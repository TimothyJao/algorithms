/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
class GraphNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
        return this;
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    add(val1, val2) {
        const node1 = this.nodes.get(val1) || new GraphNode(val1);
        const node2 = this.nodes.get(val2) || new GraphNode(val2);
        this.nodes.set(val1, node1.addChild(node2));
        this.nodes.set(val2, node2.addChild(node1));
    }

    get(val) {
        return this.nodes.get(val);
    }
}

function ladderLength(beginWord, endWord, wordList) {
    wordList.push(beginWord);
    const graph = buildGraph(wordList);

    let nodeBegin = graph.get(beginWord);
    let nodeEnd = graph.get(endWord);
    if (!nodeEnd) return 0;
    nodeBegin.distance = nodeEnd.distance = 1;
    nodeBegin.visitedBegin = nodeEnd.visitedEnd = true;

    const queueBegin = [nodeBegin];
    const queueEnd = [nodeEnd];

    while (queueBegin.length || queueEnd.length) {
        nodeBegin = queueBegin.shift() || new GraphNode();
        nodeEnd = queueEnd.shift() || new GraphNode();

        for (let child of nodeBegin.children) {
            if (child.visitedEnd) {
                return nodeBegin.distance + child.distance;
            } else if (!child.visitedBegin) {
                child.distance = nodeBegin.distance + 1;
                child.visitedBegin = true;
                queueBegin.push(child);
            }
        }

        for (let child of nodeEnd.children) {
            if (child.visitedBegin) {
                return nodeEnd.distance + child.distance;
            } else if (!child.visitedEnd) {
                child.distance = nodeEnd.distance + 1;
                child.visitedEnd = true;
                queueEnd.push(child);
            }
        }
    }

    return 0;
}

function buildGraph(wordList) {
    const graph = new Graph();
    const wordSet = new Set(wordList);
    const a = 'a'.charCodeAt(0);

    for (let word of wordSet) {
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                let transWord = word.substring(0, i) + String.fromCharCode(a + j) + word.substr(i + 1);
                if (wordSet.has(transWord) && transWord !== word) {
                    graph.add(word, transWord);
                }
            }
        }
    }

    return graph;
}