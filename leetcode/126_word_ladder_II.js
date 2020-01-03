function findLadders(start, end, wordList) {
    let dict = new Set(wordList);
    let res = [];
    let nodeNeighbors = {};
    let distance = {};
    let solution = [];

    dict.add(start);
    bfs(start, end);
    dfs(start, end);
    return res;

    function bfs(start, end) {
        dict.forEach(word => nodeNeighbors[word] = [])

        let queue = [];
        queue.push(start);
        distance[start] = 0;

        while (queue.length > 0) {
            let count = queue.length;
            let foundEnd = false;
            for (let i = 0; i < count; i++) {
                let cur = queue.shift();
                let curDistance = distance[cur];
                let neighbors = getNeighbors(cur, dict);

                neighbors.forEach(neighbor => {
                    nodeNeighbors[cur].push(neighbor);
                    if (distance[neighbor] === undefined) {
                        distance[neighbor] = curDistance + 1;
                        if (end === neighbor) {
                            foundEnd = true;
                        } else {
                            queue.push(neighbor)
                        }
                    }
                })
                if (foundEnd) {
                    break;
                }
            }
        }
    }

    function getNeighbors(node, dict) {
        let neighbors = [];
        let chs = node.split("");
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        for (let i = 0; i < alphabet.length; i++) {
            for (let j = 0; j < chs.length; j++) {
                if (chs[j] === alphabet[i]) continue;
                let old_char = chs[j];
                chs[j] = alphabet[i];
                if (dict.has(chs.join(""))) {
                    neighbors.push(chs.join(""));
                }
                chs[j] = old_char;
            }
        }
        return neighbors;
    }

    function dfs(cur, end) {
        solution.push(cur);
        if (end === cur) {
            res.push([...solution]);
        } else {
            nodeNeighbors[cur].forEach(next => {
                if (distance[next] === distance[cur] + 1) {
                    dfs(next, end);
                }
            })
        }
        solution.pop();
    }
}