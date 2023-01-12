//첫번째로 푼 코드
function checkEvenOrNot(arr) {
  return arr.map((a) => {
    if (a === 0) return "no";

    return a % 2 === 0 ? "ok" : "no";
  });
}

//코드 줄이기
function checkEvenOrNot(arr) {
  return arr.map((a) => (a === 0 || a % 2 ? "no" : "ok"));
}
