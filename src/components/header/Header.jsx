import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- FORMATEDJS ------------------------------- */
import { FormattedMessage } from 'react-intl'
/* ------------------------------- COMPONENTS ------------------------------- */
import Card from './Card'

const Header = () => {
  return (
    <Container>
        <div className='container-lg container'>
            <div className='body'>
                <p>
                    <FormattedMessage id='header.text1' defaultMessage={'Hi, my name is '} />
                </p>
                <h1>
                    <FormattedMessage id='header.text2' defaultMessage={'Manuel Diez.'} />
                    <br />
                    <strong>
                        <FormattedMessage id='header.text3' defaultMessage={"I'm a full Stack developer"} />
                    </strong>
                </h1>
                <h2>
                    <FormattedMessage id='header.text4' defaultMessage={"I love Technology, Creativity and building things for the web"} />
                </h2>
            </div>
            <Card/>
        </div>
        <div className="bgEffect"></div>
        <div className="bgEffect"></div>
        <div className="bgEffect"></div>
        <div className="bgEffect"></div>
        <div className="bgEffect"></div>
    </Container>
  )
}

export default Header

const Container = styled.section`
    background-color: ${props => props.theme.bg_1};
    padding: 0 1rem;
    width: auto;
    position: relative;
    overflow: hidden;

    .bgEffect{
        position: absolute;
        z-index: 1;
        width: 3px;
        height: 70px;
        bottom: -100px;
        background-color: #F3FF73;
        animation: burbujas 2s linear infinite;

        left: 5%;
        animation-delay: 1s;

        
        &:nth-child(2){
            background-color: #00FF55;
            left: 35%;
            animation-delay: 2.5s;
        }
        &:nth-child(3){
            background-color: #6B2CF5;
            left: 55%;
            animation-delay: 3.5s;

        }
        &:nth-child(4){
            background-color: #00BBFF;
            left: 75%;
            animation-delay: 4s;

        }
        &:nth-child(5){
            background-color: #E223B8;
            left: 95%;
            animation-delay: 3.2s;
        }

        @keyframes burbujas {
            0%{
                bottom: 0;
                opacity: 0;

            }
            20%{
                opacity: 1;
            }
            80%{
                opacity: .6;
            }
            100%{
                bottom: 100%;
                opacity: 0;
            }
        }
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 100px 0;
        position: relative;
        z-index: 2;

        

        .body{
            p{
                margin: 0;


                font-size: 1rem;
                color: ${props => props.theme.color_3};
                font-weight: 400;
                margin-bottom: 2rem;
            }
            h1{
                margin: 0;

                font-size: 2rem;
                color: ${props => props.theme.color_1};
                font-weight: 600;
                margin-bottom: 2rem;
                strong{
                    padding-top: 2rem;
                }
            }
            h2{
                margin: 0;

                font-size: 1rem;
                color: ${props => props.theme.color_2};
                font-weight: 400;

            }
            margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            padding: 200px 0;

            .body{
                p{
                    font-size: 1.3rem;
                }
                h1{
                    font-size: 3rem;
                    line-height: calc(100% + 2rem);
                }
                h2{
                    font-size: 1.3rem;
                    width: 60%;
                }
            }

        }
    }

`
