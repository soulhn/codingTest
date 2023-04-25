function solution(num_list) {
    let multiplication =  1
    let sum = 0
    num_list.forEach(el => multiplication *= el)
    num_list.forEach(el => sum += el)
    
    return multiplication < sum * sum ? 1 : 0
}