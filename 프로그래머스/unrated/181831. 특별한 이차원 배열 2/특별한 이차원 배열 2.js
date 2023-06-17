function solution(arr) {
    const LENTH = arr.length
    
    for(let i =0; i<LENTH; i++){
        for(let j=0; j<LENTH; j++){
            if(arr[i][j] !== arr[j][i]) return 0
        }
    }
    
    
    return 1
    
}