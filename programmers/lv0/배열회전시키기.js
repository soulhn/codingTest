function solution(numbers, direction) {
  let target = 0;
  if (direction === "right") {
    target = numbers[numbers.length - 1];
    numbers.pop();
    numbers.unshift(target);
  }
  if (direction === "left") {
    target = numbers[0];
    numbers.shift();
    numbers.push(target);
  }
  return numbers;
}

function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}
