//처음으로 푼 코드
function letterCapitalize(str) {
  return str
    .split(" ")
    .map((a) => {
      return a[0] ? a[0].toUpperCase() + a.slice(1) : "";
    })
    .join(" ");
}

//substr(1) 코드 공부하고 추가하기
