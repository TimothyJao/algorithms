function longestVowel(string){
    lengths = []
    vowels = ['a', 'e', 'i', 'o', 'u']
    let vowel_count = 0;
    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){vowel_count += 1}
        else if (vowel_count != 0 || (vowel_count != 0 && i === string.length-1)){
            lengths.push(vowel_count)
            vowel_count = 0;
        }
    }

    if(!vowels.includes(string[0])){lengths = [0].concat(lengths)}
    else if (!vowels.includes(string[-1])) {lengths.push(0)}

    if(lengths.length >= 3){
        return lengths[0] + lengths[lengths.length-1] + Math.max(...lengths.slice(1,-1))
    } else{
        let sum = 0;
        for(let i = 0; i < lengths.length; i++){
            sum += lengths[i]
        }
        return sum
    }
}