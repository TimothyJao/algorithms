function cellState(cells, days){
    temp = [cells]
    while(days > 0){
        temp[0] = cells[1] ^ 0
        temp[7] = cells[6] ^ 0

        for(let i = 1; i < cells.length-1; i++){
            temp[i] = cells[i-1] ^ cells[i+1] 
        }

        for(let i = 0; i < temp.length; i++){
            cells[i] = temp[i]
        }

        days -= 1
    }
    return cells
}

console.log(cellState([1, 0, 0, 0, 0, 1, 0, 0], 1))

console.log(cellState([1, 1, 1, 0, 1, 1, 1, 1], 2))