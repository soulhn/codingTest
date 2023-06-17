function solution(numLog) {
    const answer = []
    const numLogReverse = numLog.reverse()
    
    for(let i = 0; i<numLog.length; i++){
        if(numLogReverse[i] - numLogReverse[i+1] === -1) answer.push("s")
        if(numLogReverse[i] - numLogReverse[i+1] === 1) answer.push("w")
        if(numLogReverse[i] - numLogReverse[i+1] === -10) answer.push("a")
        if(numLogReverse[i] - numLogReverse[i+1] === 10) answer.push("d")
    }
    return answer.reverse().join("")
}