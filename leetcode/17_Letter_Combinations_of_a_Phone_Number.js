function letterCombinations(digits){
    let hash = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    if(digits.length === 0) return [];
    let result = [""];
    let temp = [];

    for(let i = 0; i < digits.length; i++){
        let chars = hash[digits[i]];
        for(let j = 0; j < chars.length; j++){
            for(let k = 0; k < result.length; k++){
                temp.push(result[k] + chars[j]);
            }
        }
        result = temp;
        temp = [];
    }
    return result;
}