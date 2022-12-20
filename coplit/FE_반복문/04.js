function makeMultiplesOfDigit(num) {
  // TODO: 여기에 코드를 작성합니다.
  let str = "";
  for(let i =1; i<=num; i++){
    if(i%3===0){
      str = str + i
    }
  }
    return str
}


// function makeMultiplesOfDigit(num) {
//   let result = '';

//   for (let i = 3; i <= num; i += 3) {
//     result = result + String(i);
//   }

//   return result;
// }