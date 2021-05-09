const request = require('request')

request.get(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (err, res, body) => {
    getData(JSON.parse(body))
  }
)
function getData(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].id}. ${data[i].name}`)
  }
}
