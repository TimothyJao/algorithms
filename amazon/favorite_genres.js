function favoriteGenres(userMap, genreMap){
    let songMap = {};
    
    Object.keys(genreMap).forEach(genre => {
        let songs = genreMap[genre];
        songs.forEach(song =>{
            songMap[song] = genre
        })
    })

    let result = {};

    Object.keys(userMap).forEach(person => {
        let songs = userMap[person];
        let countHash = {};
        let largest = 0;
        let genres = []

        songs.forEach(song => {
            let genre = songMap[song];
            if(!countHash[genre]) countHash[genre] = 1
            else countHash[genre] += 1
            if (countHash[genre] > largest){
                largest = countHash[genre];
                genres = [genre]
            } else if (countHash[genre] === largest){
                genres.push(genre)
            }
        })
        result[person] = genres
    })

    return result
}

let userMap = {
    "David": ["song1", "song2", "song3", "song4", "song8"],
    "Emma": ["song5", "song6", "song7"]
}

let genreMap = {
    "Rock": ["song1", "song3"],
    "Dubstep": ["song7"],
    "Techno": ["song2", "song4"],
    "Pop": ["song5", "song6"],
    "Jazz": ["song8", "song9"]
}

console.log(favoriteGenres(userMap, genreMap))