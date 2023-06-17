function solution(q, r, code) {
    const answer = []
    //정수q와 r
    //문자열 code
    //code의 각 인덱스를 q로 나주었을 때, 나머지가 r인 문자열
    
    for(let i =0; i<code.length; i++){
        if(i % q ===r) answer.push(code[i])
    }
    return answer.join("")
    
}