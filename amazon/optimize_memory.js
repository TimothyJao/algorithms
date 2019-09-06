function optimizeMemory(foregroundTasks, backgroundTasks, memorySpace){
    foregroundTasks.sort((a,b)=>(a-b))
    backgroundTasks.sort((a,b)=>(a-b))

    let fore_pointer = 0;
    let back_pointer = backgroundTasks.length-1;
    let max = 0;
    let results = []

    while (fore_pointer < foregroundTasks.length && back_pointer >= 0){
        let sum = foregroundTasks[fore_pointer][1] + backgroundTasks[back_pointer][1];
        if(sum > memorySpace){
            back_pointer--;
        } else{
            if(sum >= max){
                if (sum > max) {
                    max = sum;
                    results = []
                }
                results.push([foregroundTasks[fore_pointer][0], backgroundTasks[back_pointer][0]])

                let index = back_pointer - 1;
                while(index >= 0 && backgroundTasks[index][1] === backgroundTasks[index+1][1]){
                    results.push([foregroundTasks[fore_pointer][0], backgroundTasks[index][0]])
                    index--;
                }
            }
            fore_pointer++;
        }
    }

    return results
}

console.log(optimizeMemory([[1, 2], [2, 4], [3, 6]], [[1, 2]], 7))
console.log(optimizeMemory([[1, 3], [2, 5], [3, 7], [4, 10]], [[1, 2], [2, 3], [3, 4], [4, 5]], 10))