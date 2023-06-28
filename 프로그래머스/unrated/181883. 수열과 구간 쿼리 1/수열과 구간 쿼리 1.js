function solution(arr, queries) {
    for (let query of queries) {
        let start = query[0];
        let end = query[1];
        for (let i = start; i <= end; i++) {
            arr[i]++;
        }
    }
    return arr;
}