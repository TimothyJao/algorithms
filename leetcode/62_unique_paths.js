function uniquePaths(m, n) {
  let currentRow = new Array(n).fill(1);
  for (let row = 1; row < m; row++) {
    for (let i = 1; i < n; i++) {
      currentRow[i] += currentRow[i - 1];
    }
  }
  return currentRow[n - 1];

  // return factorial(m+n-2)/(factorial(m-1)*factorial(n-1))
}

// function factorial(num){
//     if(num === 0) return 1;
//     let product = 1;
//     for(let i = 1; i <= num; i++){
//         product *= i;
//     }    
//     return product
// }