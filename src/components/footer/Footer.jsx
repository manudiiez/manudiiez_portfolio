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
            <div className='title'>
                <div></div>
                <h5>Contact</h5>
                <div></div>
            </div>
            <div className='body'>
                <h6>I'm looking for new opportunities.</h6>
                <p>manudiiez123@gmail.com</p>
                <ul>
                    <li>
                        <a href="#!">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='button'>
                <button>
                    Use my bot
                </button>
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

        .title{
            display: flex;
            justify-content: center; 
            align-items: center;
            h5{
                font-size: 2rem;
                color: ${props => props.theme.color_1};
                padding: 0 1rem;
                font-weight: normal;
                margin: 0;
            }
            div{
                width: 100%;
                height: 1px;
                background-color: ${props => props.theme.color_1};
            }
        }

        .body{
            h6{
                margin: 0;
                margin-top: 3rem;
                font-size: 1.3rem;
                font-weight: normal;
                color: ${props => props.theme.color_1};
                text-align: center;
            }

            p{
                font-weight: normal;
                color: ${props => props.theme.color_2};
                text-align: center;
                font-size: 0.8rem;
                margin-top: 2rem;
            }

            ul{
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                li{
                    margin: 0 1rem;
                    margin-top: 2rem;
                    a{
                        svg{
                            font-size: 1.3rem;
                            color: ${props => props.theme.color_1};

                        }
                    }
                }
            }
        }

        .button{
            width: 100%;
            display: flex;
            justify-content: center;
            button{
                color: ${props => props.theme.color_1};
                background-color: ${props => props.theme.bg_3};
                border: none;
                width: 70%;
                margin-top: 2rem;
                height: 40px;
                border-radius: 10px;
                font-size: 1.3rem;
                font-weight: normal;
            }
        }   
    }


`