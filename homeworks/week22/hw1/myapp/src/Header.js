import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import {HashRouter as Router, Switch, Route} from "react-router-dom"

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed
  top: 0;
  left: 0;
  right: 0;
`

export default function App() {
  return (
   <HeaderContainer>Header~</HeaderContainer> 
  )
}
