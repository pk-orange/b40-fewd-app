import React from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`

export const Container = (props) => {
  return <SContainer>{props.children}</SContainer>
}

export default Container
