function solution(arr, k) {
    const result = []
    
    for(let i = 0; i<arr.length; i++){
        if(!result.includes(arr[i])) {result.push(arr[i])}
        if(k === result.length) return result
    }
    
    const addMinusOne = k - result.length
    return [...result, ...Array(addMinusOne).fill(-1)]
    
}