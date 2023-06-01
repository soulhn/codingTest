function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
    let arr1Sum = arr1.reduce((acc,cur) => acc+cur)
    let arr2Sum = arr2.reduce((acc,cur) => acc+cur)
    if(arr1Sum === arr2Sum) return 0
    return arr1Sum > arr2Sum ? 1 : -1
     }
    return arr1.length > arr2.length ? 1 : -1
}