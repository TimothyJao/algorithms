function trap(height){
  let left = 0;
  let right = height.length-1;
  let leftMax = height[left];
  let rightMax = height[right];
  let total = 0;

  while(left < right){
    if(height[left] < height[right]){
      left++;
      leftMax = Math.max(height[left], leftMax);
      total += (leftMax - height[left]);
    } else{
      right--;
      rightMax = Math.max(height[right], rightMax);
      total += (rightMax - height[right]);
    }
  }
  return total;
}