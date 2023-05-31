import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Experience from './experience';

function Skilllist() {
  return (
    <div className='aboutpagebackground'>
    <Container>
        <Row className='textbackground'>
            <Col md={12} >
                <h4 className='aboutmetext'>Skills</h4>
                <div className="row col-12 col-md-12 pt-3">
                    <div className="col-6 col-md-2">
                            <img src="https://i.ibb.co/wJ1Vy08/angular.png" alt="angular" class="html-img m-1" />
                        <h1 class="text">Angular</h1>
                    </div>

                    <div class="col-6 col-md-2">
                            <img src="https://i.ibb.co/M7Hw8rF/nodejs.jpg" alt="nodejs" class="html-img m-1" />
                        <h1 class="text" >NodeJS</h1>
                    </div>

                    <div class="col-6 col-md-2">
                            <img src="https://i.ibb.co/26ZprqN/MongoDB.png" alt="MongoDB" class="html-img m-1" />
                        <h1 class="text">MongoDB</h1>
                    </div>

                    <div class="col-6 col-md-2">
                            <img src="https://i.ibb.co/wJBdjmK/angularmaterial.png" alt="angularmaterial" class="html-img m-1" />
                        <h1 class="text" >Angular Material</h1>
                    </div>
                    <div class="col-6 col-md-2">
                            <img src="https://i.ibb.co/2jVKcFv/download.png" alt="PrimeNg" class="html-img m-1" />
                        <h1 class="text" >PrimeNg</h1>
                    </div>
                    <div class="col-6 col-md-2">
                            <img src="https://ik.imagekit.io/5estyfjkp/reactjs.png?updatedAt=1685429905692" alt="Reactjs" class="html-img m-1" />
                        <h1 class="text" >ReactJs</h1>
                    </div>
                    <div class="col-6 col-md-2">
                            <img src="https://ik.imagekit.io/5estyfjkp/redux.png?updatedAt=1685430563688" alt="Redux" class="html-img m-1" />
                        <h1 class="text" >Redux</h1>
                    </div>
                    <div class="col-6 col-md-2">
                            <img src="https://i.ibb.co/X4dkBg1/coreui.png" alt="coreui" class="html-img m-1" />
                        <h1 class="textcore" >CoreUI</h1>
                    </div>
                    <div class="col-6 col-md-2">
                            <img src="https://i.ibb.co/6FNCLZF/typescript.png" alt="typescript" class="html-img m-1" />
                        <h1 class="text" >TypeScript</h1>
                    </div>
                    <div class="col-6 col-md-2">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png" alt="html5"  class="html-img m-1" />
                        <h1 class="text" >HTML5</h1>
                    </div>

                    <div class="col-6 col-md-2">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png"  alt="css"  class="html-img m-1" />
                        <h1 class="textcss" >CSS3</h1>
                    </div>
                    <div class="col-6 col-md-2">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png"  alt="bootstrap"  class="html-img m-1" />
                        <h1 class="text" >Bootstrap</h1>
                    </div>
                    <div class="col-6 col-md-2">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png" alt="javascript" class="html-img m-1" />
                        <h1 class="text" >JavaScript</h1>
                    </div>

                </div>
            </Col>
            <Col md={12}>
                 <Experience/>             
            </Col>
        </Row>
    </Container>
</div>
  )
}
export default Skilllist