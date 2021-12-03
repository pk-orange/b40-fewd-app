import React from 'react'
import styled from 'styled-components'

const SOverview = styled.div`
  width: 25%;
`

export const Overview = (props) => {
  const { total, stars } = props

  return (
    <SOverview>
      <div>starBarNumber</div>
      <div>starBarNumber</div>
      <div>starBarNumber</div>
      <div>starBarNumber</div>
      <div>starBarNumber</div>
    </SOverview>
  )
}

export default Overview
