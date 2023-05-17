function solution(brown, yellow) {
    let answer = [];
    let total = brown + yellow;
    let arr = [];    
    for(let i = 2; i < total/2 ;i++) {
        if(total % i === 0) {
            arr.push([total/i ,i]);
        }
    }
    answer = arr.filter( value => (value[0] + value[1]) * 2 - 4 === brown)[0];
    
    return answer;
}