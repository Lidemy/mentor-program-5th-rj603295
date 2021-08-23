import styled from 'styled-components'
import React from 'react'

const Root = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 5%;
`
const RightContainer = styled.div`
  margin-top: 20%;
  text-align: right;
`
export default function AboutPage() {
  return (
    <Root>
      <p>啦啦啦~~~ React 接 API BLOG~~~~</p>
      <p>不想排版~~~~~</p>
      <p>好累~~~~~</p>
      <RightContainer>
      <p>還是稍微排一下好了</p>
      <p>不知道怎麼排</p>
      <p>這樣看起來好像很文青</p>
      </RightContainer>
    </Root>
  )
}
