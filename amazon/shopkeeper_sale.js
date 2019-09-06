function shopkeeperSale(prices){
    let stack = [];
    let price = 0;
    let constant_prices = [];

    for(let i = prices.length-1; i >= 0; i--){
        while(stack.length > 0 && prices[i] < stack[stack.length-1]){
            stack.pop()
            smallest = false;
        }

        if(stack.length === 0){
            price += prices[i]
            constant_prices.push(i)
        }else{
            price += prices[i]-stack[stack.length-1]
        }

        stack.push(prices[i])
    }

    constant_prices = constant_prices.reverse()
    return [price, constant_prices]
}

console.log(shopkeeperSale([2,3,1,2,4,2]))
console.log(shopkeeperSale([5, 1, 3, 4, 6, 2]))
console.log(shopkeeperSale([1, 3, 3, 2, 5]))