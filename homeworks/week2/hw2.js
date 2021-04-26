function capitalize(str) {
  if (str === "") {
    return str
  }
  let firstS = str[0].toUpperCase()
  let ans = firstS
  for(let i=1; i<str.length; i++){
    ans += str[i]
  }
  return ans
}

console.log(capitalize('hello'));
