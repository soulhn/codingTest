function solution(my_string, queries) {
  let strArray = my_string.split('');

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    reverseSubstring(strArray, start, end);
  }

  return strArray.join(''); 
}

function reverseSubstring(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
