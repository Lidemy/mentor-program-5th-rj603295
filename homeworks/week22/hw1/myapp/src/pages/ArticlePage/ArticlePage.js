import styled from 'styled-components'
import { useParams} from 'react-router-dom'
import { getArticle } from '../../WebAPI'
import { useEffect, useState } from 'react'
const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  line-height: 1.5;
`;
export default function ArticlePage() {
  let { id } = useParams();
  const [post, setPost] = useState("")
  useEffect(() => {
    getArticle(id).then(res => setPost(res[0].body))
  }, [id])
  return (
    <Root>
      <div>{post}</div>
    </Root>
  )
}
