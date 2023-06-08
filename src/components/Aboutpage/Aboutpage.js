import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={9} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <img src="https://i.ibb.co/tXDKPk1/picture-new-one.png" alt="mahesh pic" className="image d-xl-none d-lg-none" />

                        <p className='aboutdetails'>
                        My name is Mahesh, I'm a Frontend enthusiastic Web Developer from Nellore, Andhra Pradesh. Currently looking for an opportunity to show my potential in Web Development. I have 2.4 years of experience working as a Frontend Developer.
                        I'm responsible for implementing the user interface of web applications with a great user experience and functional layouts that matches the client requirement and testing and debugging web pages to ensure they are compatible with different browser and devices.Have knowledge on server side tech and DB.
                        <br />I like to code things for web and open to adopt new technology to enhance my skills and capabilities, Motivated to learn,grow and excel in career.I am a dedicated person with a family of four.I enjoy reading, and the knoledge and perspctive that my reading gives me have strengthened my teaching skills and presentation abilities.
                        </p>
                        {/* <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul> */}
                    </Col>
                    <Col md={3}>
                    <img src="https://i.ibb.co/tXDKPk1/picture-new-one.png" alt="mahesh pic" className="imagedesktop d-none d-lg-flex" />
                     
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage