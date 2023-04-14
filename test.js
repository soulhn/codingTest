const board = [
  [0, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const operation = "DDR";

function boardGame(board, operation) {
  //4*4라면 MAX = 4
  const MAX = board.length;
  //행렬
  let row = 0;
  let column = 0;
  let isOut = false;
  let count = 0;
  const controller = {
    U: () => (row -= 1),
    D: () => (row += 1),
    L: () => (column -= 1),
    R: () => (column += 1),
  };
  operation.split("").forEach((e) => {
    console.log(controller[e]());
    console.log(row, column);
    if (row < 0 || column < 0 || row === MAX - 1 || column === MAX) {
      isOut = true;
    }
    count += board[row][column];
  });
  return isOut ? "OUT" : count;
}

boardGame(board, operation);
