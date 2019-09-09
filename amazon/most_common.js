function mostCommonWords(literature, wordsToExclude){
    let result = [];
    let longest = 0;
    let wordCount = {};

    const words = literature.toLowerCase().split(/[ !?',;.]/)
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        if (wordsToExclude.includes(word)){continue}
        if (!wordCount[word]){
            wordCount[word] = 1
        } else{
            wordCount[word] += 1
        }
        if(wordCount[word]>longest){
            longest = wordCount[word];
            result = [word]
        } else if(wordCount[word] === longest){
            result.push(word)
        }
    }
    return result;
}
let literature = "Jack and Jill went to the market to buy bread and cheese.Cheese is Jack's and Jill's favorite food."
let wordsToExclude = ['and', 'he', 'the', 'to', 'is', 'jack', 'jill']
console.log(mostCommonWords(literature, wordsToExclude))