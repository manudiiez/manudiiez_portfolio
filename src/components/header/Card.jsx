import React,{useRef} from 'react'
/* ----------------------------------- IMG ---------------------------------- */
import img from './perfil-1024x754.jpg'
import logo from '../../img/portfolio_logo.jpg'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'

const Card = () => {

  const wrapper = useRef()
  const ticket = useRef()

  const moveMouse = ({nativeEvent}) => {
    const {width, height} = wrapper.current.getBoundingClientRect()
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    // console.log(halfWidth, halfHeight)
    const {offsetX, offsetY} = nativeEvent
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    const rotationY = -((offsetY - halfHeight) / halfHeight) * 10;
    ticket.current.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg)`
  }

  const leaveMouse = () => {
    ticket.current.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  return (
    <Container ref={wrapper} onMouseMove={moveMouse} onMouseLeave={leaveMouse}>
      <div className='ticket' ref={ticket}>
        <div className="content">
          <p>manudiiez</p>
        </div>

        <img src={logo} alt="" />
        {/* <div className="img__container">
          <svg  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><title/><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"/></svg>
        </div> */}
      </div>
    </Container>
  )
}

export default Card

const Container = styled.div`


  perspective: 1000px;
  width: 100%;
  @media (min-width: 768px) {
    width: 285px;
    height: 375px;
  }
  .ticket{
    width: 100%;
    height: 300px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    overflow: hidden;
    transition: transform .5s ease-in-out;  
    box-shadow: 0  0 50px 5px rgba(0,0,0, .4);
    animation-name: gradient-shadow;
    animation-timing-function: ease;
    animation-duration: 3s;
    animation-iteration-count: infinite;

    &:hover{
      transition: none;
    }
    @media (min-width: 768px) {
      width: 285px;
      height: 375px;
    }

    /* .img__container{
      width: 100%;
      height: 100%;
      position: relative;
      left: -30%;
      bottom: -40%;
      svg{
        width: 100%;
      }
    } */

    img{
      width: 100%;
    }
  }

  @keyframes gradient-shadow {
    0% {
      box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
      opacity: 0.1;

    }
    2% {
      box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
      opacity: 1;
    }
    4% {
      box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
      opacity: 0.1;
    }
    8% {
      box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
      opacity: 1;
    }
    20% {
      box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
    }
    40% {
      box-shadow: 0 0 17px 3px #0f0,0 0 4px 2px #0f0;
    }
    60% {
      box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
    }
    70% {
      box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
      /* opacity: 0.1; */
    }
    /* 72% {
      box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
      opacity: 1;
    }
    74% {
      box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;

      opacity: 0.1;
    }
    78% {
      box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
      opacity: 1;
    } */
    80%{
      box-shadow: 0 0 17px 3px #f00,0 0 4px 2px #f00;
    }
    100% {
      box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
      opacity: 1;

    }
  }
    
`