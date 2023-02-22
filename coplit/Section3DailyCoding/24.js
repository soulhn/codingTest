//나의 풀이
//한번 탐색한 곧은 다시 탐색 하지 않는 아이디어
const isSubsetOf = function (base, sample) {
  //오름차순 정렬하여 작은 수 부터 비교
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  //두 배열 모두 오름차순 정렬 시 중복 검사가 필요 없어 인덱스 저장 변수 선언
  let checkedIndex = 0;
  // 정답을 리턴 할 변수(true로 시작)
  let answer = true;

  //sample 내부 요소 반복
  for (let i = 0; i < sample.length; i++) {
    //탈출 케이스
    if (!answer) break;
    // base 내부 요소 반복(이미 탐색한 index는 checkedIndex로 피해간다.
    for (let j = checkedIndex; j < base.length; j++) {
      //sampe의 요소가 base에 존재한다면
      if (sample[i] === base[j]) {
        //탐색한 요소를 재 탐색하지 않기 위해 탐색한 index 저장
        checkedIndex = j;
        break;
      }
      //여기서 부터는 정답이 아닌 경우
      //1번째 sampe의 값보다 base의 값이 큰 경우
      if (sample[i] < base[j]) {
        answer = false;
        break;
      }
      //마지막까지 탐색하였는데 sample의 값이 base에 없던 경우
      if (j === base.length - 1 && sample[j] !== sample[i]) {
        answer = false;
        break;
      }
    }
  }
  return answer ? true : false;
};

// 레퍼런스 코드
const isSubsetOf2 = function (base, sample) {
  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  //item: sample의 요소
  //arr: 정렬한 base 배열
  //from: 이미 탐색한 index
  const findItemInSortedArr = (item, arr, from) => {
    //중복 탐색을 하지 않게 i값에 from
    for (let i = from; i < arr.length; i++) {
      //sample의 요소가 from에 있다면 return index
      if (item === arr[i]) return i;
      //없다면 -1
      else if (item < arr[i]) return -1;
    }
    //탐색 종료 시에도 -1
    return -1;
  };

  // baseIdx 설정(탐색한 요소 다시 탐색)
  let baseIdx = 0;
  //sample의 요소 반복
  for (let i = 0; i < sample.length; i++) {
    //요소에 대하여 findItemInSortedArr 실행
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    //-1을 받으면 false로 종료(하나의 요소라도 없으면 false)
    if (baseIdx === -1) return false;
  }
  //탐색이 잘 끝났다면 성공
  return true;
};

// set을 이용한 방법
const sSet = [...new Set([...base, ...sample])];
return base.length === sSet.length;

const sSet2 = new Set([...sample, ...base]);
return base.length === sSet2.size;

const isSubsetOf4 = function (base, sample) {
  //set 시간 복잡도 1 배열 n
  let setBase = new Set(base);
  for (let el of sample) {
    if (!setBase.has(el)) return false;
  }
  return true;
};
