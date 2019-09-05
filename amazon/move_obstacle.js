function moveObstacle(numRows, numColumns, lot){
    let row = 0;
    let col = 0;
    let row_queue = [];
    let col_queue = [];
    let move_count = 0;
    let nodes_left_in_layer = 1; 
    let nodes_in_next_layer = 0;
    let reached_end = false;
    let visited = {};

    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, 1, -1];

    row_queue.push(row);
    col_queue.push(col);
    visited[[row,col]] = true

    while(row_queue.length > 0){
        let r = row_queue.shift()
        let c = col_queue.shift()
        if (lot[r][c] == '9'){
            reached_end = true
            break
        }
        
        for(let i = 0; i < 4; i++){
            rr = r + dr[i]
            cc = c + dc[i]

            if (rr < 0 || cc < 0){continue}
            if (rr >= numRows || cc >= numColumns){continue}

            if (visited[[rr,cc]]){continue}
            if (lot[rr][cc] == 0){continue}

            row_queue.push(rr)
            col_queue.push(cc)

            visited[[rr, cc]] = true;
            nodes_in_next_layer++;
        }

        nodes_left_in_layer--;
        if (nodes_left_in_layer == 0){
            nodes_left_in_layer = nodes_in_next_layer;
            nodes_in_next_layer = 0;
            move_count ++;
        }
    }
    if(reached_end){return move_count}
    return -1

}

console.log(moveObstacle(3, 4, [
                                [1,0,1,0],
                                [1,1,1,1],
                                [1,0,0,9]
                            ]))