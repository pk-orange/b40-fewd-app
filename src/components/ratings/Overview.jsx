import React from 'react'
import styled from 'styled-components'
import { stars } from '../../data'

const SOverview = styled.div`
  opacity: 1;
  margin: 0 40px;
  padding: 0 40px;
  border-left: 1px #e6e6e6 solid;
  border-right: 1px #e6e6e6 solid;
  .rating {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #5e5e5e;
    font-size: 1.2rem;
    cursor: default;
    align-items: center;
    margin: 0px 2px;
  }

  .back {
    background-color: #dfdfdf !important;
    height: 18px;
    width: 150px;
    margin-left: 10px;
  }

  .total {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    width: 5%;
    margin-left: 10px;
    font-size: 0.9rem;
  }

  .wrap:hover .rating:hover {
    opacity: 0.9;
  }

  .wrap:hover .rating:not(:hover) {
    opacity: 0.4;
  }

  .front {
    height: 100%;

    background-color: #ffaa42;
  }
`

export const Overview = (props) => {
  const { total } = props

  return (
    <SOverview>
      <div className="wrap">
        {stars.map((star, i) => {
          return (
            <div className="rating" key="i">
              {star.starCounts}

              <div className="back">
                <div
                  className="front"
                  style={{ width: `${star.botBar}%` }}
                ></div>
              </div>
              <div className="total"> {`(${star.total}) `}</div>
            </div>
          )
        })}
      </div>
    </SOverview>
  )
}

export default Overview
