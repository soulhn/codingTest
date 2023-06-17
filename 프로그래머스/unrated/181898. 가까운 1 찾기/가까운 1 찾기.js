function solution(arr, idx) {
    
    for(let i =0; i<arr.length; i++){
        if(arr[i] === 1 && idx <= i) return i
    }
    
    return -1 
}