function solution(arr) {
    let n = arr.length;
    let power = Math.ceil(Math.log2(n)); 

    // n이 2의 거듭제곱이 아니면 0을 추가
    if ((1 << power) !== n) {
        let zerosToAdd = (1 << power) - n;
        arr = arr.concat(new Array(zerosToAdd).fill(0));
    }

    return arr;
}
