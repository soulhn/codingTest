function solution(n, control) {
    let answer = n;
    const obj = {
        "w" : () => answer += 1,
        "s" : () => answer -= 1,
        "d" : () => answer += 10,
        "a" : () => answer -= 10
    }
    control.split("").forEach(el => {
        obj[el]();
    });
    return answer;
}