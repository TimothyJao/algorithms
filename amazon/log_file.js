function logFile(logFileSize, logLines){
    let letters = [];
    let ints = [];

    for(let i = 0; i < logFileSize; i++){
        let log = logLines[i]
        let substr = log.substr(log.indexOf(' ')+1);
        if(!isNaN(substr[0])){ints.push(log)}
        else{letters.push(log)}
    }

    letters.sort((a,b) => {
        let strA = a.substr(a.indexOf(' ') + 1);
        let strB = b.substr(b.indexOf(' ') + 1);

        if(strA === strB) return a.localeCompare(b);
        return strA.localeCompare(strB);
    });

    return letters.concat(ints)
}