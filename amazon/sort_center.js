function sortCenter(truckSpace, packagesSpace){
    let totalSpace = truckSpace-30;
    packagesSpace.sort((a,b) => a-b);

    let start = 0;
    let end = packagesSpace.length-1;
    let pair = []
    let largest = 0;
    let difference = Infinity;
    while(start < end){
        let sum = packagesSpace[start] + packagesSpace[end]
        if(sum > totalSpace){
            end--;
        } else{
            let currentDiff = totalSpace - sum;
            if(currentDiff < difference){
                difference = currentDiff;
                pair = [start, end];
                largest = packagesSpace[end];
            } else if(currentDiff === difference){
                if(packagesSpace[end] > largest){
                    pair = [start, end];
                    largest = packagesSpace[end];
                }
            }
            start++;
        }
    }
    return pair;  
}

console.log(sortCenter(90, [1, 10, 25, 30, 30, 35]))