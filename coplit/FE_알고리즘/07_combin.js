function boringBlackjack(cards) {
  const isPrime = (n) => {
    const prime = {};
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
      if (prime[n]) {
        break;
      }
      if (prime[i]) {
        continue;
      }
      for (let j = i ** 2; j <= n; j += i) {
        prime[j] = true;
      }
    }
    return !prime[n];
  };

  function getCombin(cards) {
    const result = [];
    for (let i = 0; i < cards.length; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        for (let k = j + 1; k < cards.length; k++) {
          result.push([cards[i], cards[j], cards[k]]);
        }
      }
    }
    return result;
  }

  const cardCombin = getCombin(cards);
  const cardSum = cardCombin.map((el) => el.reduce((acc, cur) => acc + cur));
  const result = cardSum.filter((el) => isPrime(el));

  return result.length;
}
