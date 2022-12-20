function replaceAll(str, from, to) {
  // TODO: 여기에 코드를 작성합니다.

  str = str.split("")

  for(let i=0; i<str.length; i++){
    if(str[i]=== from){
      str[i] = to
    }
  }
  return str.join("")
}


// function replaceAll(str, from, to) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === from) {
//       result = result + to;
//     } else {
//       result = result + str[i];
//     }
//   }

//   return result;
// }
