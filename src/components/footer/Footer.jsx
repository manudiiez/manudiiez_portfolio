import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <Container>
        <div className="container-lg container">

            <div className="container__media">
                <div className="content">
                    <ul>
                        <li>
                            <a href="#!">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        
                        
                    </ul>
                </div>
                <div className='line'></div>
            </div>
            <div className="container__email">
                <div className="content">
                    <div>
                        <a href="#!">manudiiez123@gmail.com</a>
                    </div>
                </div>
                <div className='line'></div>
            </div>
        </div>

    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: ${props => props.theme.bg_2};
    padding: 0 1rem;

    .container{
        padding: 100px 0;
        width: 100%;

        .line{
            height: 100px;
            width: 2px;
            background-color: ${props => props.theme.color_2};
        }
        .container__media{
            position: fixed;
            bottom: 0;
            left: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .content{
                ul{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li{
                        a{
                            svg{
                                font-size: 1.5rem;  
                                color: ${props => props.theme.color_2};

                            }
                        }
                        margin-bottom: 2rem;
                    }
                }
            }

        }

        .container__email{
            position: fixed;
            bottom: 0;
            right: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .content{
                height: 233px;

                div{
                    position: relative;
                    width: 100px;
                    height: 100%;
                    background-color: red;
                    a{
                        position: absolute;
                        color: ${props => props.theme.color_2};
                        text-decoration: none;
                        top: 0;
                        left: -100%;
                    }
                }
                margin-bottom: 2rem;
                transform: rotate(90deg);
            }
        }
    }


`