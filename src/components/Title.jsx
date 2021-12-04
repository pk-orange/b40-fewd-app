import React from 'react'
import styled from 'styled-components'

const STitle = styled.div`
  display: block;
  text-align: center;
  color: #4b4b4b;
  margin: 60px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2rem;
`

export const Title = (props) => {
  return <STitle>Reviews</STitle>
}

export default Title
