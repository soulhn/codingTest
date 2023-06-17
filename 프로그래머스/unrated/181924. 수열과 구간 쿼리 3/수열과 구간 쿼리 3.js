function solution(arr, queries) {
    //arr : 정수 배열
    // queries : 2차원 정수 배열
    //arr 배열 내부의 i와 j를 바꾸기
    let a = 0;
    let b = 0;
    let aValue = 0;
    let bValue = 0;
    let newArr = arr;
    
    for(let i =0; i<queries.length; i++){
        [a,b] = queries[i]

        aValue = newArr[a]
        bValue = newArr[b]
        newArr.splice(a, 1, bValue)
        newArr.splice(b, 1, aValue)
     
    }
    return newArr
}