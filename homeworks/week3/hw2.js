const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line)
})

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  const n1 = Number(lines[0].split(' ')[0])
  const n2 = Number(lines[0].split(' ')[1])
  for (let i = n1; i <= n2; i++) {
    if (isFlower(i)) {
      console.log(i)
    }
  }
}
function isFlower(n) {
  let m = n
  const digits = digitsCount(m)
  let sum = 0
  while (m !== 0) {
    const num = m % 10
    sum += num ** digits
    m = Math.floor(m / 10)
  }
  if (sum === n) {
    return true
  } else {
    return false
  }
}
function digitsCount(n) {
  if (n === 0) { return 1 }
  let result = 0
  while (n !== 0) {
    n = Math.floor(n / 10)
    result++
  }
  return result
}
