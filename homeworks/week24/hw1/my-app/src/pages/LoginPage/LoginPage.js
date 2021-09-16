import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, setErrorMessage } from '../../redux/reducers/userReducer'

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
export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const [errorMessage, setErrorMessage] = useState('')
  const errorMessage = useSelector((store) => store.user.errorMessage)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(setErrorMessage(null))
    }
  }, [dispatch])
  const handleSubmit = () => {
    dispatch(setErrorMessage(null))
    dispatch(login(username, password, history))
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <div>
        帳號：<input value={username} onChange={ (e) => setUsername(e.target.value) }/>
      </div>
      <div>
        密碼：<input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
      </div>
      <button>登入</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </form>
    </Container>
  )
}
