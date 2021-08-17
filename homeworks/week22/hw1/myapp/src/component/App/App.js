

import styled from 'styled-components'
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import Header from '../Header/Header'
import ArticlePage from "../../pages/ArticlePage"
import RegisterPage from "../../pages/RegisterPage"
import NewPostPage from "../../pages/NewPostPage"
import AboutPage from "../../pages/AboutPage"
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { useEffect, useState } from 'react'
import { AuthContext } from '../../contexts'
import { getMe } from '../../WebAPI'
import { getAuthToken } from '../../utils'
const Root = styled.div`
  padding-top: 64px;
`
function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    let token = getAuthToken()
    if (token) {
      getMe().then(response => {
        if (response.ok) {
          setUser(response.data)
        }
      })
    } 
  }, [])

  return (
    <AuthContext.Provider value={{user, setUser}}>
    <Root>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/posts/:id">
              <ArticlePage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/new-post">
              {user ? <NewPostPage /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Switch>
      </Router>
    </Root>
    </AuthContext.Provider>
  );
}

export default App;
