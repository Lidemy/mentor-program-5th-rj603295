import styled from 'styled-components'
import { useEffect, React } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../redux/reducers/postReducer'

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  line-height: 1.5;
`
const PostDelete = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
  border: 1px solid black;
`
export default function ArticlePage() {
  const dispatch = useDispatch()
  //const isLoading = useSelector(store => store.posts.isLoadingPost)
  const post = useSelector(store => store.posts.post)
  const user = useSelector((store) => store.user.user)
  const { id } = useParams()
  useEffect(() => {
    console.log('redner')
    dispatch(getPost(id))
  }, [id, dispatch])
  return (
    <Root>
      {user && <PostDelete to={`/edit-post/${id}`} >編輯</PostDelete>}
      {post && <h2>{post[0].title}</h2>}
      {post && <div>{post[0].body}</div>}
      <br />
    </Root>
  )
}
