import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getPosts, deleteArticle } from '../../WebAPI'
import { useEffect, useState, useContext, useRef } from 'react'
import { AuthContext } from '../../contexts'
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
  ${props => props.$active && 
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
function Post({ post, handleDelete, user }) {
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
  const [posts, setPosts] = useState([])
  const [amount, setAmount] = useState(0)
  const [pagination, setPage] = useState([])
  const [currentPage, setCurrentPage] = useState("1")
  const { user } = useContext(AuthContext)
  useEffect(() => {
    getPosts()
    .then(
      posts => {
        setAmount(posts.amount)
        return posts.res
      }
    ).then(
      posts => setPosts(posts)
    )
  }, [])
  useEffect(() => {
    let arr = []
    for(let i=1; i<=Math.ceil(amount/5); i++){
      arr.push(i)
    }
    setPage(arr)
  }, [amount])

  const handlePage = (e) => {
    let page = e.target.innerText
    setCurrentPage(page)
    getPosts(page)
    .then(
      posts => {
        setAmount(posts.amount)
        return posts.res
      }
    ).then(
      posts => setPosts(posts)
    )
  }
  const handleDelete = (id) => {
    deleteArticle(id)
    .then(
      posts => {
        getPosts(currentPage)
        .then(
          posts => {
            setAmount(posts.amount)
            return posts.res
          }
        ).then(
          posts => setPosts(posts)
        )
      }
    )
  }
  return (
    <Root>
      {posts.map(post => <Post user={user} handleDelete={handleDelete} key={post.id} post={post} />)}
      <PageContainer>
      {pagination.map(page =>
          <Page key={page} value={page} $active={currentPage === page.toLocaleString()} onClick={(e) => {handlePage(e)}}>{page}</Page>
      )}
      </PageContainer> 
    </Root>
  )
}
