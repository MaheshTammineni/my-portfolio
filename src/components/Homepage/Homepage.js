import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
        <Col md={7}   className='text-center d-xl-none d-lg-none'>
          
        <h2 className='headtextmobile'>Hello <span className='wave' role='img' aria-label='hi'>👋 </span></h2>
            <h2 className='nametextmobile'><span style={{color: 'white'}}>I'm </span>
            Mahesh Tammineni</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/MaheshTammineni");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/mahesh-tammineni-468Ok");
            }}
              className='socailmediabtn linkedin'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.location = "mailto:maheshtammineni2222@gmail.com";
              // window.open("mailto:xyz@abc.com");
            }}
              className='socailmediabtn'><AiOutlineMail className='icon' /></button>

        </Col>


          <Col md={7}  className='d-none d-lg-flex'>
          
            <div>
            <h2 className='headtext'>Hello <span className='wave' role='img' aria-label='hi'>👋 </span></h2>
            <h2 className='nametext'>I'm 
            Mahesh Tammineni</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/MaheshTammineni");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/mahesh-tammineni-468Ok");
            }}
              className='socailmediabtn linkedin'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.location = "mailto:maheshtammineni2222@gmail.com";
              // window.open("mailto:xyz@abc.com");
            }}
              className='socailmediabtn'><AiOutlineMail className='icon' /></button>
            </div>

          </Col>

          <Col md={2}>
            <div className='d-none d-lg-flex'>
              <img src='https://media.giphy.com/media/jdPMeyv9rn0hZHh8n9/giphy.gif' alt='gifimage'/>
            </div>
            <div >
              <img src='https://media.giphy.com/media/jdPMeyv9rn0hZHh8n9/giphy.gif' className='gif d-xl-none d-lg-none' alt='gifimage'/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home