function solution(rsp) {
  let answer = "";
  for (const a of rsp) {
    if (a === "2") answer += "0";
    if (a === "0") answer += "5";
    if (a === "5") answer += "2";
  }
  return answer;
}

function solution2(rsp) {
  let arr = {
    //object 자료형
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
