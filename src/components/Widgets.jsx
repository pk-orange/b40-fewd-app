import React from 'react'
import styled from 'styled-components'

const SWidgets = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Widgets = (props) => {
  return <SWidgets>{props.children}</SWidgets>
}

export default Widgets
