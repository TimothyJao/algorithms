function merge(nums1, m, nums2, n) {
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let position = m + n - 1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    if (nums1[pointer1] >= nums2[pointer2]) {
      nums1[position] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[position] = nums2[pointer2];
      pointer2--;
    }
    position--;
  }

  while (pointer2 >= 0) {
    nums1[position] = nums2[pointer2];
    position--;
    pointer2--;
  }
  return nums1;
}