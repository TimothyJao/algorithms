function rotate(matrix){
    let layers = Math.floor(matrix.length/2);
    for(let i = 0; i < layers; i++){
        let startIdx = i;
        let endIdx = matrix.length - 1 - i;
        for(let j = 0; j < endIdx - startIdx; j++){
            swap(matrix, startIdx, startIdx + j, startIdx+j, endIdx);
            swap(matrix, startIdx, startIdx+j, endIdx, endIdx-j);
            swap(matrix, startIdx, startIdx+j, endIdx-j, startIdx);
        }
    }
}

function swap(matrix, a1, a2, b1, b2){
    [matrix[a1][a2], matrix[b1][b2]] = [matrix[b1][b2], matrix[a1][a2]];
}