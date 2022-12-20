function getMaxNumberFromString(str) {
  // TODO: 여기에 코드를 작성합니다.
  //1. 하나하나 탐색하고 숫자바꿔서 비교하고
  let answer = "0"
  for(let i=0; i< str.length; i++){
    if(answer < str[i]){
      answer = str[i]
    }
}
return  answer 
}
