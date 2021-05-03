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
  const n = Number(lines[0])
  let A = 0
  let B = 0
  let K = 0
  for (let i = 1; i <= n; i++) {
    A = BigInt(lines[i].split(' ')[0])
    B = BigInt(lines[i].split(' ')[1])
    K = Number(lines[i].split(' ')[2])
    console.log(whoWins(A, B, K))
  }
}
function whoWins(A, B, K) {
  if (K === 1) {
    if (A > B) {
      return 'A'
    } else if (A < B) {
      return 'B'
    } else {
      return 'DRAW'
    }
  }
  if (K === -1) {
    if (A > B) {
      return 'B'
    } else if (A < B) {
      return 'A'
    } else {
      return 'DRAW'
    }
  }
}
