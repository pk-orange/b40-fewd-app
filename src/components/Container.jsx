import React from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
`

export const Container = (props) => {
  return <SContainer>{props.children}</SContainer>
}

export default Container
