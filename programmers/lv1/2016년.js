function solution(a, b) {
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let dayOfWeek = week[new Date(`2016-${a}-${b}`).getDay()];
  return dayOfWeek;
}
