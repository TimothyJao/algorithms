function threeNumberSum(array, targetSum) {
    final = []
    array.sort((a, b) => { return a - b })
    for(let i = 0; i < array.length; i++){
        array.sort((a,b) => {return a-b})
        let first = array[i];
        left = i + 1;
        right = array.length-1;
        while(left < right){
            let sum = first + array[left] + array[right]
            if ( sum === targetSum) { 
                final.push([first, array[left], array[right]]);
                left += 1;
                right -= 1;
            } else{
                if(sum > targetSum){right -= 1}
                else if (sum < targetSum){left += }
            }
        }
    }
    return final
}