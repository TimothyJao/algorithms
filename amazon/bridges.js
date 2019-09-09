function bridges(n, graph){
    let ids = new Array(n).fill(0);
    let low = new Array(n).fill(0);
    let visited = new Array(n).fill(false)
    let id = 0;

    let bridges = [];

    for(let i = 0; i < n; i++){
        if(!visited[i]){
            dfs(i, -1, bridges, ids, low, graph, visited, id);
        }
        return bridges
    }
}   

function dfs(at, parent, bridges, ids, low, graph, visited, id){
    visited[at] = true;
    id = id + 1
    low[at] = ids[at] = id;

    for(let i = 0; i < graph[at].length; i++){
        let to = graph[at][i]
        if ( to === parent) {continue}
        if(!visited[to]){
            dfs(to, at, bridges, ids, low, graph, visited, id)
            low[at] = Math.min(low[at], low[to])
            if(ids[at] < low[to]){
                bridges.push([at, to])
            }
        } 
        else{low[at] = Math.min(low[at], ids[to])}
    }
}

// let graph = {
//     0:[1, 2, 3, 5],
//     1:[0,2],
//     2: [0, 1],
//     3: [2, 4],
//     4: [3],
//     5: [2, 6, 8],
//     6: [5, 7],
//     7: [6, 8],
//     8: [5, 7]
// }

// let graph = {
//     0:[1, 2],
//     1:[0,2, 3, 4],
//     2: [0, 1],
//     3: [1, 5],
//     4: [1, 5],
//     5: [3,4],
// }

let graph = {
    0: [2, 3, 1],
    1: [0],
    2: [0,3],
    3: [0,2,4],
    4: [4]
}

console.log(bridges(9, graph))