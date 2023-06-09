function solution(names) {
    // 길이를 5로 나누기
    // 몫 2, 나머지 3이라면
    // 0, 5
    const repetition = names.length / 5
    const result = []
    for(let i =0; i<names.length; i += 5){
        result.push(names[i])
    }
    return result
}