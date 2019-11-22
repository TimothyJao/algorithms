function permute(nums, n = 0){
    if(n >= nums.length) return [[]];
    let res = [];
    const prevs = permute(nums, n+1);
    for(let prev of prevs){
        for(let i = 0; i <= prev.length; i++){
            let p = prev.slice();
            p.slice(i, 0, nums[n]);
            res.push(p);
        }
    }
    return res;
}