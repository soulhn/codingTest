function solution(numbers) {
  numbers = numbers.replace(/zero/g, 0);
  numbers = numbers.replace(/one/g, 1);
  numbers = numbers.replace(/three/g, 3);
  numbers = numbers.replace(/four/g, 4);
  numbers = numbers.replace(/five/g, 5);
  numbers = numbers.replace(/six/g, 6);
  numbers = numbers.replace(/seven/g, 7);
  numbers = numbers.replace(/eight/g, 8);
  numbers = numbers.replace(/nine/g, 9);
  numbers = numbers.replace(/two/g, 2);

  return +numbers;
}

function solution2(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
    return obj[v];
  });

  return Number(num);
}
