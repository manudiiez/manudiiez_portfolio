import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const BarsWidget = ({state, handleChangeState}) => {
    

    return (
        <Container className={state && 'active'} onClick={handleChangeState}>
            <span></span><span></span><span></span>
        </Container>
    )
}

export default BarsWidget

const Container = styled.div`
    
    position: relative;
    width: 25px;
    height: 20px;
    overflow: hidden;
    @media (min-width: 768px) {
        display: none;
    }

    span{
        opacity: 1;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 10px;
        color: black;
        background-color: white;
        position: absolute;
        transform: rotate(0deg);
        transition: .4s ease-in-out;

        &:nth-child(1){
            top: 0;
        }
        &:nth-child(2){
            top: 9px;
        }
        &:nth-child(3){
            top: 18px;
        }
    }

    &.active{
        span{

            &:nth-child(1){
                transform: translateY(9px) rotate(135deg);
            }
            &:nth-child(2){
                opacity: 0;
                transform: translateX(60px);
            }
            &:nth-child(3){
                transform: translateY(-9px) rotate(-135deg);
            }
        }
    }
    
`