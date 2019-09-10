function dataCenter(numOfServers, numOfConnections, connections) {

    let graph = {};

    for(let i = 1; i < numOfServers+1; i++){
        graph[i] = [];
    }

    for(let i = 0; i < connections.length; i++){
        let connection = connections[i];
        graph[connection[0]].push(connection[1]);
        graph[connection[1]].push(connection[0]);
    }

    let ids = new Array(numOfServers).fill(0);
    let low = new Array(numOfServers).fill(0);
    let visited = new Array(numOfServers).fill(false)
    let id = 0;

    let bridges = [];

    for (let i = 1; i < numOfServers+1; i++) {
        if (!visited[i]) {
            dfs(i, -1, bridges);
        }
        return bridges
    }

    function dfs(at, parent, bridges) {
        visited[at] = true;
        id = id + 1
        low[at] = ids[at] = id;
        for (let i = 0; i < graph[at].length; i++) {
            let to = graph[at][i]
            if (to === parent) { continue }
            if (!visited[to]) {
                dfs(to, at, bridges)
                low[at] = Math.min(low[at], low[to])
                if (ids[at] < low[to]) {
                    bridges.push([at, to])
                }
            }
            else { low[at] = Math.min(low[at], ids[to]) }
        }
    }
}


numOfServers = 5
numOfConnections = 5
connections = [[1, 2], [1, 3], [3, 4], [1, 4], [4, 5]]

console.log(dataCenter(numOfServers, numOfConnections, connections))