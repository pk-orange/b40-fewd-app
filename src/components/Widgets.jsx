import React from 'react'
import styled from 'styled-components'

const SWidgets = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Widgets = (props) => {
  return <SWidgets>{props.children}</SWidgets>
}

export default Widgets
