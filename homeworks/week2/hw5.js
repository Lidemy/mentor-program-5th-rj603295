function join(arr, concatStr) {
  if (arr.length === 0) {
    return ""
  }
  let str = ""
  for (let i=0; i<arr.length-1; i++) {
    str += arr[i] + concatStr
  }
  str += arr[arr.length-1]
  return str
}

function repeat(str, times) {
  let ans = ""
  for (let i=1; i<=times; i++){
    ans += str
  }
  return ans
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
