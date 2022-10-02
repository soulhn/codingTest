function solution(n, arr1, arr2) {
  var answer = [];
  arr1 = arr1.map((item) => item.toString(2).padStart(n, 0).split(""));
  arr2 = arr2.map((item) => item.toString(2).padStart(n, 0).split(""));

  for (let i = 0; i < n; i++) {
    answer[i] = [];
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        answer[i].push("#");
      } else {
        answer[i].push(" ");
      }
    }
  }
  return answer.map((item) => item.join(""));
}
