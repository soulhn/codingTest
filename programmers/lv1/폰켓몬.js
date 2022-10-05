function solution(nums) {
  const numsLength = nums.length / 2;
  let newArray = [...new Set(nums)];
  return newArray.length > numsLength ? numsLength : newArray.length;
}
