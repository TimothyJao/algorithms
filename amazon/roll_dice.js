function rollDice(dice){
    let counts = [0, 0, 0, 0, 0, 0];
    let min = Infinity;

    for(let i = 0; i < dice.length; i++){
        counts[dice[i]-1] += 1
    }

    for(let i = 0; i < counts.length; i++){
        console.log(counts[5-i], dice.length, counts[i])
        let sum = counts[5-i] + dice.length - counts[i]
        min = Math.min(min, sum)    
    }

    return min
}

console.log(rollDice([1, 6, 2,3]))