function isPythagorean(side1, side2, side3) {
  side1 = Math.pow(side1, 2);
  side2 = side2 ** 2;
  side3 = side3 * side3;
  let arr = [];

  arr.push(side1);
  side2 > side1 ? arr.unshift(side2) : arr.push(side2);
  side3 > arr[0] ? arr.unshift(side3) : arr.push(side3);

  return arr[0] === arr[1] + arr[2];
}
