function solution(chicken) {
  let remainingCoupons = chicken;
  let freeChicken = 0;

  while (remainingCoupons >= 10) {
    freeChicken += Math.floor(remainingCoupons / 10);
    remainingCoupons = (remainingCoupons % 10) + Math.floor(remainingCoupons / 10);
  }
  return freeChicken;
}