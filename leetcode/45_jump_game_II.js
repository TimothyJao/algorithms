function jump(nums){
    let max = 0;
    let nextMax = 0;
    let jumps = 0;
    let i = 0;
    while(true){
        let v = nums[i];
        if(max >= nums.length-1){
            break;
        }

        nextMax = Math.max(i+v, nextMax);

        if(i === max){
            max = nextMax;
            jumps++;
        }
        i++;
    }
    return jumps;
}