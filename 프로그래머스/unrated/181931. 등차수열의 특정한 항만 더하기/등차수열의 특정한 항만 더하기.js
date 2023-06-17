function solution(a, d, included) {
    let answer = 0
    for(let i = 0; i<included.length; i++){
        if(included[i] === true) {
            if(i === 0) answer += a
            else answer += a + (i * d)
        }
    }
    return answer
}