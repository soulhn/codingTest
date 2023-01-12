function square(number) {
  return number * number;
}
//키 값이 배열이라면?
//배열의 요소를 제곱한 새로운 배열 리턴
//배열이 아니라면?

function getSquaredElementsAtProperty(obj, property) {
  if (Array.isArray(obj[property])) {
    return obj[property].map((a) => square(a));
  } else {
    return [];
  }
}
//래퍼런스코드
function getSquaredElementsAtProperty(obj, property) {
  let maybeArr = obj[property];

  if (Array.isArray(maybeArr) === false) {
    return []; //배열이 아니면 [] 리턴
  }

  return maybeArr.map(square);
}

let key = [2, 1, 5];

function square(number) {
  return number * number;
}

console.log(key.map(square));
console.log(
  key.map((num) => {
    return num * num;
  })
);
