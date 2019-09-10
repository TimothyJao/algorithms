function kDistinctCharacters(inputStr, k){
    let result = new Set()
    let hash = {}
    for(let i = 0; i < inputStr.length-k; i++){
        let str = ""
        for(let j = i; j < i + k; j++){
            if (!hash[inputStr[j]]) hash[inputStr[j]] = 1;
            else break;
            str += inputStr[j];
        }
        console.log(hash)
        if(Object.keys(hash).length === k){
            result.add(str);
        }
        hash = {}
    }
    return result;
}

console.log(kDistinctCharacters("awaglknagawunagwkwagl", 4))