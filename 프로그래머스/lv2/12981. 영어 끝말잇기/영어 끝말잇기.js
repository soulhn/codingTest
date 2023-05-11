function solution(n, words) {
    const players = Array.from({length: n}, (_, i) => i + 1);
    const wordSet = new Set();

    for(let i = 0; i < words.length; i++){
        const player = players[i % n];
        const round = Math.floor(i / n) + 1;
        if(wordSet.has(words[i]) || (i > 0 && words[i][0] !== words[i-1][words[i-1].length-1])){
            return [player, round];
        }
        wordSet.add(words[i]);
    }
    return [0, 0];
}