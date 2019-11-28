function spiralOrder(matrix, result = []){
    if(matrix.length === 0){
        return result;
    }

    for(let i = 0; i < matrix.length; i++){
        let current = matrix[i];
        if(i === 0){
            result = result.concat(current);
        } else{
            let last = current.pop();
            if(!last){
                return result;
            }
            result.push(last);
            current.reverse();
        }
    }
    matrix.shift();
    return spiralOrder(matrix.reverse(), result)
}