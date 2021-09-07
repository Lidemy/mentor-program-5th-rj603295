import styled from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useEffect, React } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Header from './component/Header/Header'
import ArticlePage from './pages/ArticlePage'
import RegisterPage from './pages/RegisterPage'
import NewPostPage from './pages/NewPostPage'
import EditPostPage from './pages/EditPostPage'
import AboutPage from './pages/AboutPage'
import { getAuthToken } from './utils'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from './redux/reducers/userReducer'

const Root = styled.div`
  padding-top: 64px;
`
function App() {
  //const [user, setUser] = useState(null)
  const user = useSelector(store => store.user.user)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = getAuthToken()
    if (token) {
      dispatch(getMe())
    }
  }, [dispatch])
  return (
    <Root>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              {!user ? <LoginPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/posts/:id">
              <ArticlePage  />
            </Route>
            <Route exact path="/register">
            {!user ? <RegisterPage />: <Redirect to="/" />}        
            </Route>
            <Route exact path="/new-post">
              {user ? <NewPostPage /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/edit-post/:id">
              {user ? <EditPostPage /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Switch>
      </Router>
    </Root>
  )
}

export default App