function addOneSecond(hour, minute, second) {
  second += 1;
  if (second === 60) {
    second -= 60;
    minute += 1;
  }
  if (minute === 60) {
    minute -= 60;
    hour += 1;
  }
  if (hour === 24) {
    hour -= 24;
  }
  return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
}
