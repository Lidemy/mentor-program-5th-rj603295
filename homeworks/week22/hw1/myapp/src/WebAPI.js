import { getAuthToken } from './utils'

const BASE_URL = 'https://student-json-api.lidemy.me'
export const getPosts = (page = 1) => fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc&_limit=5&_page=${page}`)
  .then((res) => {
    const articleAmout = res.headers.get('x-total-count')
    return {
      res: res.json(),
      amount: articleAmout
    }
  })
export const login = (username, password) => fetch(`${BASE_URL}/login`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    username,
    password
  })
}).then((res) => res.json())
export const getMe = () => {
  const token = getAuthToken()
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => res.json())
}
export const getArticle = (id) => fetch(`${BASE_URL}/posts?id=${id}`, {
})
  .then((res) => res.json())
export const register = (username, password, nickname) => fetch(`${BASE_URL}/register`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    username,
    password,
    nickname
  })
}).then((res) => res.json())
export const createPost = (payload) => {
  const token = getAuthToken()
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((res) => res.json())
}
export const deleteArticle = (id) => {
  const token = getAuthToken()
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    }
  })
    .then((res) => res.json())
}
