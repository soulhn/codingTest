// function solution(n) {
//     let answer, t1 = 0, t2 = 1;
//     for(let i = 2 ; i <= n + 1 ; i++) {
//         answer = t1 + t2 % 1234567;
//         t1 = t2;
//         t2 = answer;
//     }
//     return answer % 1234567;
// }

function solution(n) {
    var answer = 0;
    var dp=[];
    dp[1]=1;
    dp[2]=2;
    for(var i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2] %1234567;
    }
    answer=dp[n];
    return answer%1234567;
}