import React, { useContext } from 'react'

import styled from 'styled-components'
import { Link, useLocation, useHistory } from "react-router-dom"
import { AuthContext } from '../../contexts'
import { setAuthToken } from '../../utils'
const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
`
const Brand = styled.div`
  font-size: 32px;
  font-weight: bold;
`
const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  ${props => props.$active && 
  `
    background: rgba(0, 0, 0, 0.1)
  `}
`
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${NavbarList} {
    margin-left: 32px;
  }
`
export default function Header() {
  const location = useLocation()
  const history = useHistory()
  const { user, setUser } = useContext(AuthContext)
  const handleLogout = () => {
    setAuthToken('')
    setUser(null)
    if (location.pathname !== '/') {
      history.push('/')
    }

  }
  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>我的第一個部落格</Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === '/'}>首頁</Nav>
          <Nav to="/about" $active={location.pathname === '/about'}>About</Nav>
          {user && <Nav to="/new-post" $active={location.pathname === '/new-post'}>發布文章</Nav>}
        </NavbarList>
      </LeftContainer>
      <NavbarList>
      {!user &&<Nav to="/register" $active={location.pathname === '/register'}>註冊</Nav>}
        {!user && <Nav to="/login" $active={location.pathname === '/login'}>登入</Nav>}
        {user && <Nav to="" onClick={handleLogout}>登出</Nav>}
      </NavbarList>
    </HeaderContainer>
  );
}
