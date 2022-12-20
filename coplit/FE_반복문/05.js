function countCharacter(str, letter) {
  // TODO: 여기에 코드를 작성합니다.

  //1. str 길이 구하기
  //2. letter 지우고
  //3. 길이
  let num = 0;
  for(let i=0; i<str.length; i++){
    if(str[i] === letter){
      num += 1
    }
  }
  return num

}
