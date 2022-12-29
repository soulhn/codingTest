function createPhoneNumber(arr) {
  //길이가 8일 때
  //8이라면 (010)을 앞에 붙인다.
  //1234 - 5678
  let answer = "";
  if (arr.length === 8) {
    const firstStr = arr.slice(0, 4).join("");
    const secondStr = arr.slice(4).join("");
    // 4랑 -4 둘다 가능하다.
    answer = `(010)${firstStr}-${secondStr}`;
  } else {
    //길이가 11일 때
    //앞의 3개는 ()로 묶는다
    const firstStr = arr.slice(3, 7).join("");
    const secondStr = arr.slice(7).join("");
    answer = `(${arr.slice(0, 3).join("")})${firstStr}-${secondStr}`;
  }
  return answer;
}

//리팩토링
// function createPhoneNumber(arr) {
//   let head = '(010)';
//   const len = arr.length;
//   const body = arr.slice(len - 8, len - 4).join('');
//   const tail = arr.slice(len - 4, len).join('');

//   if (len === 11) {
//     head = `(${arr.slice(0, 3).join('')})`;
//   }

//   return `${head}${body}-${tail}`;
// }
