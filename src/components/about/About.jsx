import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- FORMATEDJS ------------------------------- */
import { FormattedMessage } from 'react-intl'

const About = () => {
  return (
    <Container id='about'>
        <div className="container-lg container">
            <div className="body__container">
                <h3>
                    <FormattedMessage id='about.text1' defaultMessage={'About Me'} />
                </h3>
                <h4>
                    <FormattedMessage id='about.text2' defaultMessage={'Hello! My name is Manuel and I enjoy creating things that live on the internet. I have a serious passion for UI effect, animations and creating beautiful design.'} />       
                </h4>
                <h4>
                    <FormattedMessage id='about.text3' defaultMessage={'My interest in web development started back in 2020 when I decided to do a web page for one of my school projects. After that I started learning every day to get my best version.'} />
                </h4>
                <h4>
                    <FormattedMessage id='about.text4' defaultMessage={'Interested in the entire frontend spectrum and in working on ambitious projects with positive people.'} />   
                </h4>
            </div>
            <div className="img__container">
                <div className='img__body'>
                    <div className='bg'></div>
                    <div className='content'></div>
                    <div></div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default About

const Container = styled.section`
    padding: 0 1rem;
    background-color: ${props => props.theme.bg_2};
    
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 100px 0;

        .body__container{
            max-width: 450px;
            width: 100%;
            margin-bottom: 3rem;
            h3{
                font-size: 2rem;
                color: ${props => props.theme.color_1};
                font-weight: 600;
                margin-bottom: 2rem;
            }

            h4{
                font-size: 1rem;
                color: ${props => props.theme.color_2};
                font-weight: normal;
            }
        }

        .img__container{
            width: 100%;
            max-width: 490px;
            .img__body{
                width: 90%;
                height: 270px;
                position: relative;
                .bg{   
                    background-color: ${props => props.theme.color_3};
                    filter: blur(15px);
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    /* animation-name: gradient-bg;
                    animation-timing-function: ease;
                    animation-duration: 3s;
                    animation-iteration-count: infinite; */
                }
                .content{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 1.5rem;
                    left: 1.5rem;
                    background-color: ${props => props.theme.bg_3};
                }
            }
        }

        @media (min-width: 768px) {
            flex-direction: row-reverse;
            justify-content: space-between;

            .body__container{
                margin: 0;
                h3{
                    font-size: 3rem;
                    margin-bottom: 2rem;
                }

                h4{
                    font-size: 1.3rem;
                }
            }

            .img__container{
                .img__body{
                    width: 80%;
                    height: 405px;
                }
            }
        }

        @media (min-width: 500px) {
            .img__container{
                .img__body{
                    height: 330px;
                    .content{
                        top: 3rem;
                        left: 3rem;
                    }

                }
            }
        }
        @media (min-width: 600px) {
            .img__container{
                .img__body{
                    height: 370px;
                }
            }
        }
    } 
    
    
    /* @keyframes gradient-bg {
        0% {
            background-color:#C586C0;
        }
        20% {
            background-color: #0ff;
        }
        40% {
            background-color: #0f0;
        }
        60% {
            background-color: #ffff01;
        }
        80%{
            background-color: #f00;
        }
        100% {
            background-color: #C586C0;
        }
    } */


`