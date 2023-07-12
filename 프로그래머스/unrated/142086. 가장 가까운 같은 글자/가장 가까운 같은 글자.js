function solution(s) {
    const answer = [];
    const charPos = new Map();

    for(let i=0; i<s.length; i++) {
        const char = s[i];

        if(charPos.has(char)) {
            answer.push(i - charPos.get(char));
        } else {
            answer.push(-1);
        }
        charPos.set(char, i);
    }

    return answer;
}
