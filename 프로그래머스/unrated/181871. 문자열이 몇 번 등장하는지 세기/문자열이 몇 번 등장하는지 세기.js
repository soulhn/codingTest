function solution(myString, pat) {
    const LENTH = pat.length;
    let count = 0
    for(let i = 0; i<myString.length - LENTH +1 ; i++){
        if(myString.slice(i, i+LENTH) === pat) count++
    }
    return count
}