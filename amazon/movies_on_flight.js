function moviesOnFlight(movie_durations, time){
    let full_time = time-30;
    let diff = Infinity;
    let longest = 0;
    let pair = [];

    movie_durations.sort((a,b)=>a-b);
    let start = 0;
    let end = movie_durations.length-1;

    while(start < end){
        let sum = movie_durations[start] + movie_durations[end];
        if(sum > full_time){
            end-=1;
        }else{
            if(full_time - sum < diff){
                diff = full_time - sum;
                pair = [movie_durations[start], movie_durations[end]]
                longest = movie_durations[end]
            } else if(full_time-sum === diff){
                if(movie_durations[end] > longest){
                    longest = movie_durations;
                    pair = [movie_durations[start, movie_durations[end]]]
                }
            }
            start += 1
        }
    }
    return pair
}

let durations = [90, 85, 75, 60, 120, 150, 125]

console.log(moviesOnFlight(durations, 250))
