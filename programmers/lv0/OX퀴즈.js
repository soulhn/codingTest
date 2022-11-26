function solution(quiz) {
  console.log(
    quiz
      .map((a) => a.replace(/ /g, "").split("="))
      .map((a) => {
        eval(a[0]) == a[1] ? "O" : "X";
      })
  );
}
