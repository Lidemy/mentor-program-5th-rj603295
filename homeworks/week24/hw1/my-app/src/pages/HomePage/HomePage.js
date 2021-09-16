import styled from 'styled-components'
import { useEffect, useState, React } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, deletePost, editPost } from '../../redux/reducers/postReducer'

const Root = styled.div`
  width: 85%;
  margin: 0 auto;
`
const PostContainer = styled.div`
  border-bottom: 1px solid rgba(o, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
const PostTitle = styled(Link)`
  font-size: 24px;
  color: #333;
  text-decoration: none;
`
const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`
const Page = styled.div`
  display: inline-block;
  border: 1px solid black;
  margin-right: 5px;
  padding: 5px;
  cursor: pointer;
  ${(props) => props.$active &&
    `
      background: rgba(0, 0, 0, 0.1);
      font-weight: bold;
    `}
`
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`
const PostDelete = styled(Link)`
  color: black;
  text-decoration: none;
`
const PostRightContainer = styled.div`
  
`
function Post({ post, handleDelete, user, handleEdit }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>
      <PostRightContainer>
        <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
        {user && <PostDelete to="" onClick={() => handleDelete(post.id)}>刪除</PostDelete>}
      </PostRightContainer>
    </PostContainer>
  )
}
export default function HomePage() {
  const [pagination, setPage] = useState([])
  const [currentPage, setCurrentPage] = useState('1')
  const user = useSelector((store) => store.user.user)
  const dispatch = useDispatch()
  const posts = useSelector((store) => store.posts.posts)
  const amount = useSelector((store) => store.posts.amount)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  useEffect(() => {
    const arr = []
    for (let i = 1; i <= Math.ceil(amount / 5); i++) {
      arr.push(i)
    }
    setPage(arr)
  }, [amount])

  const handlePage = (e) => {
    const page = e.target.innerText
    setCurrentPage(page)
    dispatch(getPosts(page))
  }
  const handleDelete = (id) => {
    dispatch(deletePost(id, currentPage))
  }
  const handleEdit = (id) => {
    dispatch(editPost(id, currentPage))
  }
  return (
    <Root>
      {posts.map((post) => <Post user={user} handleEdit={handleEdit} handleDelete={handleDelete} key={post.id} post={post} />)}
      <PageContainer>
      {pagination.map((page) =>
        <Page key={page} value={page} $active={currentPage === page.toLocaleString()} onClick={(e) => { handlePage(e) }}>{page}</Page>
      )}
      </PageContainer>
    </Root>
  )
}
