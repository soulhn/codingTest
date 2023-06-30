function solution(num_list) {
    let total = 0;
    for(let num of num_list) {
        while(num > 1) {
            if(num % 2 === 0) {
                num /= 2;
            } else {
                num = (num - 1) / 2;
            }
            total += 1;
        }
    }
    return total;
}
