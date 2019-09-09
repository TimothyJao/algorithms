function treasure_island(islands){
    let directions = [[0,1], [1,0], [0, -1], [-1,0]];
    if(islands.length === 0 || islands[0].length === 0) return -1;
    let rows = islands.length;
    let cols = islands[0].length;
    let queue = [];
    let steps = 1;
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if (islands[i][j] === 'S') {
                queue.push([i, j]);
                islands[i][j] = 'D';
            }
        }
    }

    while(queue.length > 0){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let pos = queue.shift();
            for(let i = 0; i < directions.length; i++){
                let dir = directions[i];
                let x = pos[0] + dir[0];
                let y = pos[1] + dir[1];
                if(x < 0 || x >= rows || y < 0 || y >= cols || islands[x][y] == 'D') continue;
                if(islands[x][y] == 'X') return steps;
                queue.push([x,y])
                islands[x][y] = 'D';
            }
        }

        steps += 1;
    }
    return -1;
    
}

let islands = 
[['S', 'O', 'O', 'S', 'S'],
['D', 'O', 'D', 'O', 'D'],
['D', 'O', 'O', 'O', 'O'],
['X', 'D', 'D', 'D', 'D'],
['X', 'D', 'D', 'D', 'X']]

console.log(treasure_island(islands))