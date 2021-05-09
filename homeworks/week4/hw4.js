const request = require('request')

request.get({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': 'yfrp6xeih18ubmc8i3k16pvwd3qxpg',
    /* eslint-disable quote-props */
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
},
(err, res, body) => {
  if (err) {
    console.log('錯誤，請重試一次')
  } else {
    const data = JSON.parse(body)
    for (let i = 0; i < data.top.length; i++) {
      console.log(`${data.top[i].viewers} ${data.top[i].game.name}`)
    }
  }
}
)
