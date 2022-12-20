function makeDigits2(num) {
  // TODO: 여기에 코드를 작성합니다.
  let i = 1;
  let result = "";
  while (true) {
    if (i === 1) {
      result = result + String(i);
      i++;
    } else if (i <= num) {
      result = result + "-" + i;
      i++;
    } else {
      return result;
    }
  }
}

// function makeDigits2(num) {
//   let result = '1';

//   let i = 2;
//   while (i <= num) {
//     result = result + `-${i}`;
//     i++;
//   }

//   return result;
// }
