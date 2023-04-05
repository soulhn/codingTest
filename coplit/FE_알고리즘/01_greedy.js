//이해가 안된 부분
// 가장 큰 무게와 가장 작은 무게가 같이 들어가는 것이 가능하다면, 그 사이에 있는 무게들도 모두 같이 들어갈 수 있기 때문에 가장 큰 무게와 두 번째로 작은 무게가 같이 들어갈 수 있다는 것이 보장됩니다. 따라서 가장 큰 무게와 두 번째로 작은 무게를 같이 넣을 수 있는지를 따로 확인하지 않아도 됩니다.

// 짐 나르기
// 김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.

// 예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째 짐과 4번째 짐은 같이 넣을 수 있지만 1번째 짐과 3번째 짐의 무게의 합은 150kg이므로 박스의 무게 제한을 초과하여 같이 넣을 수 없다.

// 박스를 최대한 적게 사용하여 모든 짐을 옮기려고 합니다.

// 짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때, 모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요.

//눈 앞에 최적의 해

function movingStuff(stuff, limit) {
  // 짐을 내림차순으로 정렬합니다.
  stuff.sort((a, b) => b - a);

  // 필요한 박스 개수를 나타내는 변수입니다.
  let boxCount = 0;

  // 가장 무거운 짐의 인덱스와 가장 가벼운 짐의 인덱스를 저장하는 변수입니다.
  let left = 0;
  let right = stuff.length - 1;

  // 모든 짐을 옮길 때까지 반복합니다.
  for (; left <= right; boxCount++) {
    // 가장 무거운 짐과 가장 가벼운 짐의 무게를 합하여 비교합니다.
    if (stuff[left] + stuff[right] <= limit) {
      left++;
      right--;
    } else {
      left++;
    }
  }

  // 필요한 박스 개수를 반환합니다.
  return boxCount;
}

//래퍼런스 코드
function movingStuff(stuff, limit) {
  let twoStuff = 0;
  // 짐을 무게순으로 오름차순 정렬
  let sortedStuff = stuff.sort((a, b) => a - b);
  // 가장 가벼운 짐의 인덱스
  let leftIdx = 0;
  // 가장 무거운 짐의 인덱스
  let rightIdx = sortedStuff.length - 1;
  while (leftIdx < rightIdx) {
    // 가장 가벼운 짐과 무거운 짐의 합이 limit 보다 작거나 같으면 2개를 한번에 나를 수 있다
    if (sortedStuff[leftIdx] + sortedStuff[rightIdx] <= limit) {
      // 다음 짐을 확인하기 위해 가장 가벼운 짐과 무거운 짐을 가리키는 인덱스를 옮겨주고
      // 한번에 2개 옮길 수 있는 개수를 +1 해준다
      leftIdx++;
      rightIdx--;
      twoStuff++;
    } else {
      // 위 조건에 맞지 않는 경우는 한번에 한 개만 나를 수 있는 경우이기 때문에
      // 가장 무거운 짐의 인덱스만 옮겨준다
      rightIdx--;
    }
  }
  // 전체 짐의 개수에서 한번에 2개를 나를 수 있는 경우를 빼 주면 총 필요한 박스의 개수를 구할 수 있다
  return stuff.length - twoStuff;
}

// 추가 풀이

//1번 짐 나르기
function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.

  //배열을 정렬해 준다 : sort() 오름차순 js sort() 오름차순, 내림차순
  let sorted = stuff.sort((a, b) => a - b);

  //배열 가장 왼쪽 요소(arr[0]), 오른쪽 요소(배열의 제일 끝 요소)를 선언을 해서 값을 할당 : 기준(index)
  let left = 0;
  let right = stuff.length - 1;

  let count = 0;

  //박스가 모두 사라질 때 까지 2~4를 반복한다. loop?
  //반복시킬 조건 :
  while (left <= right) {
    //2.배열의 가장 왼쪽 요소와 배열의 가장 오른쪽 요소를 더한다
    //sorted[left] + sorted[right]
    //더한 값이 limit보다 클 경우
    if (sorted[left] + sorted[right] > limit) {
      //가장 오른쪽 요소를 제거해주고(박스에 담고)
      right--;
      //카운트를 센다
      count++;
    } else {
      //4.더한 값이 limit보다 작을 경우
      //두 요소 모두 제거하고
      left++;
      right--;
      //카운트를 센다
      count++;
    }
  }

  return count;
}
