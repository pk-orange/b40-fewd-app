import React from 'react'
import styled from 'styled-components'

const SButtons = styled.div`
  button {
    background-color: white;
    border: black solid 2px;
    border-radius: 3px;
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: bold;
    margin-left: 15px;
    cursor: pointer;
    box-shadow: 1px 1px 3px #808080;
    &:hover {
      box-shadow: none;
    }
  }
  svg {
    text-align: center;
    vertical-align: bottom;
    padding: 0 5px 0 0;
  }
  @media (max-width: 750px) {
    margin-top: 30px;
  }
`

export const Buttons = (props) => {
  return (
    <SButtons>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        Ask a Question
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
        Write a Review
      </button>
    </SButtons>
  )
}

export default Buttons
