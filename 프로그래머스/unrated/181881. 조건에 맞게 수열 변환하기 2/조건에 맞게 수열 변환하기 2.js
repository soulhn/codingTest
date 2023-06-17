function solution(arr) {
    // 정수 배열 : arr
    // 1. 50보다 크거나 같은 짝수라면 2로 나누기.
    // 2. 50보다 작은 홀수라면 2를 곱하고 다시 1을 더하기.
    let count = 0;
    let beforeArr = arr;
    while(true){
        const newArr = beforeArr.map(el => {
            if(50<=el && el % 2===0){
                return el / 2
            } else if(50 > el && el % 2 === 1){
                return el * 2 + 1
            } else{
                return el
            }
        })    
        if(JSON.stringify(newArr) === JSON.stringify(beforeArr)) {
            break
        }
        beforeArr = newArr
        count++
    }
    return count
    
}