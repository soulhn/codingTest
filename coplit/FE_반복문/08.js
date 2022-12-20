function getSumOfFactors(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 약수 구하는 법 1~ 자기수까지 나눠보고 나머지가 0이면 약수
  // 제곱근으로 구하면 
  let sum =0;
  for(let i=1; i<=num; i++){
    if(num % i ===0){
      sum += i
    }
  }
  return sum
}

