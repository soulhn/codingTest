function solution(order) {
  order = order + "";
  let result = 0;
  result += order.split("3").length - 1;
  result += order.split("6").length - 1;
  result += order.split("9").length - 1;
  return result;
}
