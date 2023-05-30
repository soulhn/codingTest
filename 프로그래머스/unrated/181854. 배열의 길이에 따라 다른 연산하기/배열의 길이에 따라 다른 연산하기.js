function solution(arr, n) {
    return arr.map((val, idx) => 
        arr.length % 2 === 0 ? (idx % 2 !== 0 ? val + n : val) : (idx % 2 === 0 ? val + n : val));
}