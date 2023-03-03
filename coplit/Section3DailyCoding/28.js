let bfs = function (node) {
  //큐는 node로 초기화
  let queue = [node];
  //결과 값 빈 배열
  const values = [];
  //큐가 비어있지 않은 동안
  while (queue.length > 0) {
    //큐에서 첫번째 노드를 head 변수에 저장
    const head = queue[0];
    // 큐 0번째 빼고 다시 저장
    queue = queue.slice(1);
    //결과 값에 head의 값
    values.push(head.value);

    //head의 자식 노드들을 큐(queue)에 추가
    head.children.forEach((child) => queue.push(child));
  }
  return values;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
