// let data = []
const gameHeaderList = document.querySelector('.game-list')
const gameTitle = document.querySelector('section h2')
const gameStreamList = document.querySelector('.section__video')
const loadBtn = document.querySelector('.button a')
let gameStreamIndex = 0
let currentGame = ''
let judgeDataLength = true
let judgeScroll = true
function renderTitle(title) {
  gameTitle.innerHTML = title
}
function renderHeader(data) {
  let str = ''
  for (let i = 0; i < 5; i++) {
    str += `<li><a href="#">${data.top[i].game.name}</a></li>`
  }
  gameHeaderList.innerHTML = str
  renderTitle(currentGame)
}
function renderStreams(data, isAppend) {
  let len
  let str = ''
  if (data.streams.length < 20) {
    len = data.streams.length
    judgeDataLength = false
  } else {
    len = 20
  }
  for (let i = 0; i < len; i++) {
    str += `<div class="section__video-item">
    <a href="${data.streams[i].channel.url}" target="_blank"><div style="background: url(${data.streams[i].preview.large}) center/cover no-repeat;" class="section__video-item__preview"></div></a>
      <div class="section__video-item__title">
        <div class="section__video-item__title__img" style="background: url(${data.streams[i].channel.logo}) center/cover no-repeat;">
        </div>
        <div class="section__video-item__title__text">
          <p>${data.streams[i].channel.status}</p>
          <span>${data.streams[i].channel.name}</span>
        </div>             
      </div>
    </div>`
  }
  gameStreamIndex += 20
  if (!isAppend) {
    gameStreamList.innerHTML = str
  } else {
    gameStreamList.innerHTML += str
  }
}
function renderLoadBtn() {
  if (!judgeDataLength) {
    loadBtn.innerText = '沒有更多了'
  } else {
    loadBtn.innerText = '載入更多'
  }
}
function getGame(game, isAppend) {
  const url = `https://api.twitch.tv/kraken/streams?game=${game}&offset=${gameStreamIndex}&limit=20`
  fetch(url, {
    method: 'GET',
    headers: {
      'Client-ID': 'yfrp6xeih18ubmc8i3k16pvwd3qxpg',
      Accept: 'application/vnd.twitchtv.v5+json'
    }
  })
    .then((response) => response.json())
    .then((jsonData) => {
      renderStreams(jsonData, isAppend)
      judgeScroll = true
      if (!judgeDataLength) {
        renderLoadBtn()
      }
    }).catch((err) => {
      alert('系統不穩定，請再試一次')
      console.log('錯誤:', err)
    })
}
function getTopFiveGames(e) {
  const url = 'https://api.twitch.tv/kraken/games/top?limit=5'
  fetch(url, {
    method: 'GET',
    headers: {
      'Client-ID': 'yfrp6xeih18ubmc8i3k16pvwd3qxpg',
      Accept: 'application/vnd.twitchtv.v5+json'
    }
  })
    .then((response) => response.json()
    ).then((jsonData) => {
      currentGame = jsonData.top[0].game.name
      renderHeader(jsonData)
      getGame(currentGame, false)
    }).catch((err) => {
      alert('系統不穩定，請再試一次')
      console.log('錯誤:', err)
    })
}
gameHeaderList.addEventListener('click', (e) => {
  currentGame = e.target.innerText
  if (e.target.nodeName === 'A') {
    gameStreamIndex = 0
    judgeDataLength = true
    getGame(currentGame, false)
    renderTitle(currentGame)
    renderLoadBtn()
  }
})
window.addEventListener('scroll', () => {
  if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.scrollHeight - 50) {
    if (judgeScroll && judgeDataLength) {
      getGame(currentGame, true)
    }
    judgeScroll = false
  }
})
getTopFiveGames()
