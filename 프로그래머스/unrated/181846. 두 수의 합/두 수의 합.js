function solution(a, b) {
    let carry = 0, result = [], len = Math.max(a.length, b.length), i, tempSum;

    a = a.split('');
    b = b.split('');

    for(i = 0; i < len; i++) {
        tempSum = parseInt(a.pop() || '0') + parseInt(b.pop() || '0') + carry;
        carry = tempSum > 9 ? 1 : 0;
        result.push(tempSum % 10);
    }

    if (carry) result.push(carry);

    return result.reverse().join('');
}
