function solution(ineq, eq, n, m) {
let answer = true
if(eq === "!"){
    answer = ineq === ">" ? n > m  : n < m
    }
if(eq === "="){
    answer = ineq === ">" ? n >= m  : n <= m
}
    return Number(answer)
}