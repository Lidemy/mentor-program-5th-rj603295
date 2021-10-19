import styled from 'styled-components'
import { useState, React } from 'react'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../WebAPI'

const ErrorMessage = styled.div`
  color: red;
`
const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  line-height: 1.5;
`
const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 80px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 800px;
  min-height: 70vh;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  textarea{
    height: 300px;
    width: 80%;
    margin-top: 20px;
  }
  input{
    margin-top: 40px;
    width: 80%
  }
`
export default function NewPostPage() {
  const [title, setTitle] = useState('')
  const [article, setArticle] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()
  const handleSubmit = () => {
    createPost({
      title,
      body: article
    }).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message)
      }
      history.push('/')
    })
  }
  return (
    <Root>
      <Container>
      <form onSubmit={handleSubmit}>
        <div>
          標題：<input value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          內容：<textarea value={article} onChange={(e) => setArticle(e.target.value)} />
        </div>
        <button>送出</button>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </form>
      </Container>
    </Root>
  )
}
