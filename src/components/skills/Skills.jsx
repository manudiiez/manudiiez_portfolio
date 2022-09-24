import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ----------------------------------- SVG ---------------------------------- */
import html from '../../img/htmlWidget.svg'
import css from '../../img/cssWidget.svg'
import sass from '../../img/sassWidget.svg'
import js from '../../img/jsWidget.svg'
import react from '../../img/reactWidget.svg'
import nodejs from '../../img/nodejsWidget.svg'
import bootstrap from '../../img/bootstrapWidget.svg'
import git from '../../img/gitWidget.svg'
import photoshop from '../../img/photoshopWidget.svg'

const Skills = () => {
  return (
    <Container id='skills'>
        <div className='container-lg container'>
            <div className="body__container">
                <h3>
                    Skills
                </h3>
                <h4>
                    I create successful responsive wewbsites that are fast, intuitive and with a dynamic user experience.
                </h4>
                <h4>
                    My main area of experience is front-end development with HTML, CSS, JS and ReactJs. But I've full-stack experience with NodeJs, Python(Flask), PHP, Mysql and MondoDB, building small and medium web layouts.
                </h4>
            </div>
            <div className="skills__container">
                <div>
                    <img src={html} alt="" />
                    <h5>HTML</h5>
                </div>
                <div>
                    <img src={css} alt="" />
                    <h5>CSS</h5>
                </div>
                <div>
                    <img src={sass} alt="" />
                    <h5>Sass</h5>
                </div>
                <div>
                    <img src={js} alt="" />
                    <h5>Javascript</h5>
                </div>
                <div>
                    <img src={react} alt="" />
                    <h5>ReactJs</h5>
                </div>
                <div>
                    <img src={nodejs} alt="" />
                    <h5>NodeJs</h5>
                </div>
                <div>
                    <img src={bootstrap} alt="" />
                    <h5>Bootstrap</h5>
                </div>
                <div>
                    <img src={git} alt="" />
                    <h5>Git</h5>
                </div>
                <div>
                    <img src={photoshop} alt="" />
                    <h5>Photoshop</h5>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Skills

const Container = styled.section`
    padding: 0 1rem;
    background-color: ${props => props.theme.bg_1};
    .container{
        padding: 100px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .body__container{
            width: 100%;
                max-width: 450px;
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

        .skills__container{
            width: 100%;
            max-width: 490px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1rem;
            div{
                width: 100%;
                height: 88px;
                background-color: ${props => props.theme.bg_3};
                border-radius: 5px;

                display: grid;
                place-content: center;

                img{
                    width: 2rem;
                    justify-self: center;
                    margin-bottom: 0.5rem;
                }

                h5{
                    font-size: 1rem;
                    font-weight: lighter;
                    color:  ${props => props.theme.color_1};
                    margin: 0;
                    text-align: center;
                }
            }

            @media (max-width: 305px) {
                grid-template-columns: repeat(2, 1fr);
            }

        }

        @media (min-width: 768px) {
            flex-direction: row;
            .body__container{
                h3{
                    font-size: 3rem;
                }

                h4{
                    font-size: 1.3rem;
                }
            }
            .skills__container{
                div{
                    height: 150px;

                    img{
                        width: 49px;
                    }

                    h5{
                        font-size: 1.3rem;
                    }
                }
            }
            
        }
    }
`   