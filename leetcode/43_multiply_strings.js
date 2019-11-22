function multiply(num1, num2){
    if(num1 == 0 || num2 == 0) return "0";

    let sum = [];
    for(let i = 0; i < num1.length; i++){
        for(let j = 0; j < num2.length; j++){
            if(sum[i+j] === undefined){
                sum[i+j] = num1[i]*num2[j];
            } else{
                sum[i+j] += num1[i]*num2[j];
            }
        }
    }

    sum.reverse();

    for(let i = 0; i < sum.length; i++){
        if(sum[i] > 9){
            if(sum[i+1] === undefined){
                sum[i+1] = Math.floor(sum[i]/10);
            }else{
                sum[i+1] += Math.floor(sum[i]/10)
            }
            sum[i] = sum[i] % 10;
        }
    }
    return sum.reverse().join("")
}