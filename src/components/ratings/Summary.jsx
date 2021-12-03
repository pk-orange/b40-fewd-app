import React from 'react'
import styled from 'styled-components'

const SSummary = styled.div`
  width: 25%;
`

export const Summary = (props) => {
  return (
    <SSummary>
      <h1>4.9</h1>
      {[...Array(5)].map((star, i) => {
        return <span>&#9733;</span>
      })}

      <p>Based on 3,194 Reviews</p>
    </SSummary>
  )
}

export default Summary
