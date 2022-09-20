import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const Card = () => {
  return (
    <Container></Container>
  )
}

export default Card

const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${props => props.theme.bg_3};
    border-radius: 10px;

    @media (min-width: 768px) {
        width: 285px;
        height: 375px;
    }
    
`