const request = require('request')
const process = require('process')

if (process.argv[2] === 'list') {
  request.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (err, res, body) => {
      getData(JSON.parse(body))
    }
  )
}
if (process.argv[2] === 'read') {
  request.get(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (err, res, body) => {
      if (err) {
        console.log('錯誤，請重試一次')
      }
      console.log(JSON.parse(body).name)
    }
  )
}
if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (err, res, body) => {
      if (err) {
        console.log('刪除失敗')
      }
      console.log('刪除成功')
    }
  )
}
if (process.argv[2] === 'create') {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: {
      name: process.argv[3]
    }
  },
  (err, res, body) => {
    if (err) {
      console.log('新增失敗')
    }
    console.log(`新增成功！，ID 為${JSON.parse(body).id}`)
  })
}
if (process.argv[2] === 'update') {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    form: {
      name: process.argv[4]
    }

  },
  (err, res, body) => {
    if (err) {
      console.log('更新失敗')
    }
    console.log(`更新成功！，Name 為${JSON.parse(body).name}`)
  })
}

function getData(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].id}. ${data[i].name}`)
  }
}
