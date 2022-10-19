function solution(s) {
  var answer = [];
  let zeroCount = 0;
  let binCount = 0;

  while (s !== "1") {
    zeroCount += s.length - s.split("").filter((a) => a === "1").length; //0갯수 늘리기
    s = s
      .split("")
      .filter((a) => a === "1")
      .length.toString(2); //0제거후길이 2진 변환
    binCount += 1;
  }
  answer.push(binCount);
  answer.push(zeroCount);
  return answer;
}
