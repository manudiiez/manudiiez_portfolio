import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* -------------------------------- FORMATJS -------------------------------- */
import { FormattedMessage } from 'react-intl'
/* ------------------------------- COMPONENTS ------------------------------- */
import BarsWidget from './BarsWidget'

const Navbar = ({state, handleChangeStateFalse, handleChangeState}) => {
  return (
    <Container>
        <div className='container-lg container'>
            <Nav className={state && 'active'}>
                <ul>
                    <li>
                        <a href="#!" onClick={() => handleChangeStateFalse()}>
                            <FormattedMessage 
                                id='menu.about' 
                                defaultMessage={'About'}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#!" onClick={() => handleChangeStateFalse()}>
                            <FormattedMessage 
                                id='menu.skills' 
                                defaultMessage={'My Skills'}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#!" onClick={() => handleChangeStateFalse()}>
                            <FormattedMessage 
                                id='menu.services' 
                                defaultMessage={'Services'}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#!" onClick={() => handleChangeStateFalse()}>
                            <FormattedMessage 
                                id='menu.work' 
                                defaultMessage={'Work'}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#!" onClick={() => handleChangeStateFalse()}>
                            <FormattedMessage 
                                id='menu.contact' 
                                defaultMessage={'Contact'}
                            />
                        </a>
                    </li>
                </ul>
                <div className="bgEffect2"></div>
                <div className="bgEffect2"></div>
                <div className="bgEffect2"></div>
                <div className="bgEffect2"></div>
                <div className="bgEffect2"></div>
            </Nav>
            <BarsWidget state={state} handleChangeState={handleChangeState}/>
        </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: calc(100% - 2rem);
    height: 50px;
    background-color: ${props => props.theme.bg_3};
    padding: 0 1rem;

    @media (min-width: 768px) {
        height: 70px;
    }

    .container{
        display: flex;
        justify-content: end;
        align-items: center;
        height: 100%;
    }

`
const Nav = styled.nav`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: -100vh;
    left: 0;

    background-color: ${props => props.theme.bg_1};
    transition: top .3s ease-in-out;
    overflow: hidden;

    .bgEffect2{
        position: absolute;
        z-index: 1;
        width: 70px;
        height: 3px;
        left: -100px;
        background-color: #F3FF73;
        animation: burbujas2 2s linear infinite;

        top: 5%;
        animation-delay: 1s;

        @media (min-width: 768px) {
            display: none;
        }

        
        &:nth-child(2){
            background-color: #00FF55;
            top: 35%;
            animation-delay: 2.5s;
        }
        &:nth-child(3){
            background-color: #6B2CF5;
            top: 55%;
            animation-delay: 3.5s;

        }
        &:nth-child(4){
            background-color: #00BBFF;
            top: 75%;
            animation-delay: 4s;

        }
        &:nth-child(5){
            background-color: #E223B8;
            top: 95%;
            animation-delay: 3.2s;
        }

        @keyframes burbujas2 {
            0%{
                left: 0;
                opacity: 0;

            }
            20%{
                opacity: 1;
            }
            80%{
                opacity: .6;
            }
            100%{
                left: 100%;
                opacity: 0;
            }
        }
    }

    ul{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        list-style: none;
        width: 100%;
        height: 100%;
        li{
            width: 100%;
            text-align: center;
            overflow: hidden;
            position: relative;
            &:before{
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 2px;
                background-size: 400%!important;
                background: linear-gradient(
                45deg,
                #ff0000,
                #ff7300,
                #fffb00,
                #48ff00,
                #00ffd5,
                #002bff,
                #7a00ff,
                #ff00c8,
                #ff0000
                );
                animation: glowing 20s linear infinite;
            }
            
            a{
                position: relative;
                display: block;
                bottom: -100%;
                font-size: 3rem;
                text-decoration: none;
                color: ${props => props.theme.color_1 };
                transition: bottom .7s ease-in-out;
                padding: .5rem 0;
            
            }
            &:hover{
                background: ${props => props.theme.bg_2 };

                &:before{
                    
                    bottom: 0;
                }
            }

            @keyframes glowing {
                0% {
                    background-position: 0 0;
                }
                50% {
                    background-position: 400% 0;
                }
                100% {
                    background-position: 0 0;
                }
            }
        }
    }

    &.active{
        top: 0;

        ul{
            li{
                a{
                    bottom: 0;
                    transition-delay: .2s;

                }
            }
        }
    }

    @media (min-width: 768px) {
        position: relative;
        background-color: transparent;
        top: 0;
        width: auto;
        height: auto;
        ul{
            flex-direction: row;

            li{
                width: auto;
                margin-left: 1.5rem;
                a{
                    font-size: 1rem;
                }

                &:hover{
                    background: transparent;

                    &:before{
                        
                        bottom: 0;
                    }
                }
            }
        }
    }

`