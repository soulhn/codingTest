let str = "javascript  is sexy ";
function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
}

console.log(
  str
    .split(" ")
    .map((a) => {
      return a[0] ? a[0].toUpperCase() + a.slice(1) : "";
    })
    .join(" ")
);
