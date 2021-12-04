import React from 'react'
import styled from 'styled-components'

const SSummary = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: thin;
  h1 {
    font-weight: bold;
    margin: 0;
    padding: 0;
    line-height: 2.3rem;
    font-size: 4rem;
  }
  p {
    font-weight: 400;
  }
  span {
    color: #ffaa42;
    font-size: 2rem;
  }

  @media (max-width: 750px) {
    text-align: center;
  }
`

export const Summary = (props) => {
  return (
    <SSummary>
      <div className="content">
        <h1>4.9</h1>
        {[...Array(5)].map((star, i) => {
          return <span>&#9733;</span>
        })}
      </div>
      <p>Based on 3,219 Reviews</p>
    </SSummary>
  )
}

export default Summary
