function solution(intStrs, k, s, l) {
    let answer = []
    //각원소마다 s번 인덱스에서 l만큼의 길이를 잘라내 정수로 변환
    //k보다 큰 값 만
    for(const int of intStrs){
        if(Number(int.slice(s, s + l) > k )){
           answer.push(Number(int.slice(s, s + l) ))
        }    
    }
return answer
}