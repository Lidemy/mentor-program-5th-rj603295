import styled from 'styled-components'
import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from '../../WebAPI'

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  line-height: 1.5;
`
export default function ArticlePage() {
  const { id } = useParams()
  const [post, setPost] = useState('')
  useEffect(() => {
    getArticle(id).then((res) => setPost(res[0].body))
  }, [id])
  return (
    <Root>
      <div>{post}</div>
    </Root>
  )
}
