
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { getMe, register } from '../../WebAPI'
import { setAuthToken } from '../../utils'
import { AuthContext } from '../../contexts'
const ErrorMessage = styled.div`
  color: red;
`
const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 80px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 500px;
  min-height: 200px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`
export default function RegisterPage() {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [nickname, setNickname] = useState("")
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()
  const handleSubmit = e => {
    setErrorMessage(null)
    register(username, password, nickname).then(data => {
      if(data.ok === 0){
        return setErrorMessage(data.message)
      }
      setAuthToken(data.token)
      getMe().then(response => {
        if(response.ok !== 1) {
          setAuthToken(null)
          return setErrorMessage(response.toString())
        }
        setUser(response.data)
        history.push("/")
      })

    })
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <div>
        帳號： <input value={username} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div>
        密碼： <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
      <div>
        暱稱： <input value={nickname} onChange={e => setNickname(e.target.value)}/>
      </div>
      <button>註冊</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </form>
    </Container>
  )
}
