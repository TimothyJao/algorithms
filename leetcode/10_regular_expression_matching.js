function isMatch(s, p){
    const H = s.length;
    const W = p.length;

    const dp = [...Array(H+1)].map(r => Array(W+1).fill(false));

    for(let r = 0; r <= H; r++){
        for(let c = 0; c <= W; c++){
            if(r === 0 && c === 0){
                dp[r][c] = true;
            } else if(r === 0){
                dp[r][c] = p[c-1] === '*' && dp[r][c-2];
            } else{
                if(s[r-1] === p[c-1] || p[c-1] === '.'){
                    dp[r][c] = dp[r-1][c-1];
                } else if(p[c-1]==="*") {
                    if(s[r-1] === p[c-2] || p[c-2] === '.'){
                        dp[r][c] = dp[r-1][c-2] || dp[r-1][c] || dp[r][c-2];
                    } else {
                        dp[r][c] = dp[r][c-2]
                    }
                }
            }
        }
    }
    return dp[H][W];
}