function solution(food) {
    let left = "";
    let right = "";
    
    for(let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2);
        for(let j = 0; j < count; j++) {
            left += String(i);
            right = String(i) + right;
        }
    }
    
    let middle = '0';
    let answer = left + middle + right;

    return answer;
}
