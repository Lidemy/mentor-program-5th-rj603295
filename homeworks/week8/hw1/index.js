let data = []
const prizeBackground = document.querySelector('.section')
const prizeBox = document.querySelector('.section__prize-box')
function getPrizeWord(prizeWord) {
  let str = ''
  str += `<div class="prize-word">${prizeWord}<br>
  <a href="#" class="section__prize-box__button-after">我要抽獎</a>
  </div>`
  prizeBackground.innerHTML = str
}
function getBackground(data) {
  if (data.prize) {
    prizeBox.classList.add('d-none')
    prizeBackground.classList.remove('prize1')
    prizeBackground.classList.remove('prize2')
    prizeBackground.classList.remove('prize3')
    prizeBackground.classList.remove('prize-none')
    switch (data.prize) {
      case 'FIRST':
        prizeBackground.classList.add('prize1')
        getPrizeWord('恭喜你中頭獎了！日本東京來回雙人遊！')
        break
      case 'SECOND':
        prizeBackground.classList.add('prize2')
        getPrizeWord('二獎！90 吋電視一台！')
        break
      case 'THIRD':
        prizeBackground.classList.add('prize3')
        getPrizeWord('恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！')
        break
      case 'NONE':
        prizeBackground.classList.add('prize-none')
        getPrizeWord('銘謝惠顧')
        break
    }
  } else if (data.error) {
    alert('系統不穩定，請再試一次')
  }
}
function getPrize(e) {
  e.preventDefault()
  const url = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery'
  const request = new XMLHttpRequest()
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      data = JSON.parse(request.responseText)
      getBackground(data)
    } else {
      alert('系統不穩定，請再試一次')
    }
  }
  request.onerror = () => {
    console.log('error')
  }
  request.open('GET', url, true)
  request.send()
}
prizeBackground.addEventListener('click', (e) => {
  if (e.target.classList.contains('section__prize-box__button') || e.target.classList.contains('section__prize-box__button-after')) {
    getPrize(e)
  }
})
