function prioritizeOrders(numOrders, order_list){
    primeList = [];
    others = [];

    for(let i = 0; i < numOrders; i++){
        let split_order = order_list[i].split(" ");
        if (isNaN(split_order[1])){primeList.push(order_list[i])}
        else{others.push(order_list[i])};
    }

    primeList = orderPrimeList(primeList);

    return primeList.concat(others);
}

function orderPrimeList(primeList){
    primeList.sort()
    primeList.sort(function(a,b){
        let a_split = a.split(" ");
        let b_split = b.split(" ");

        let a_compare = a_split.slice(1).join(" ")
        let b_compare = b_split.slice(1).join(" ")
        return a_compare > b_compare;
    })

    return primeList
}

answer = prioritizeOrders(6, [
    "fp kindle book",
    "IOa echo show",
    "17g 12 256",
    "abl kindle book",
    "125 echo dot second generation",
    "Zid 93 12"
])


for(let i = 0; i < answer.length; i++){
    console.log(answer[i])
}