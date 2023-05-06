function solution(strArr) {
    let answer = []
    for(let i = 0; i < strArr.length; i++){
        i % 2 === 0 ? answer.push(strArr[i].toLowerCase()) :   answer.push(strArr[i].toUpperCase())
    }
    return answer
}