function optimizeMemory(foregroundTasks, backgroundTasks, memorySpace){
    let task_hash = {}
    let task_combos = []
    let max = 0;
    
    for (let i = 0; i < foregroundTasks.length; i++){
        task_hash[memorySpace-foregroundTasks[i]] = i
    }

    for (let i = 0; i < backgroundTasks.length; i++){
        if(task_hash[backgroundTasks[i]]){
            task_combos.push([task_hash[backgroundTasks[i]], i])
        }
    }

    return task_combos
}

console.log(optimizeMemory([1, 7, 2, 4, 5, 6], [3, 1, 2], 6))
console.log(optimizeMemory([1, 7, 2, 4, 5, 6], [3, 1, 2], 10))