import React from "react";
import "../../pages/style.css";
// import Carousel from "flat-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function Contactpage() {
  const images = [
    {
      src: "https://i.ibb.co/bFWZMnd/ashraf.jpg",
      description:
        "Mahesh shows his best presence in Angular development, and he complete the tasks in short time as well efficiently .Having him on the project certainly made everything run smoother.",
      person: "-Syed Ashraf Alam, Technical Manager in HCLTech",
    },
    {
      src: "https://i.ibb.co/wcZTfxB/bhavani.jpg",
      description:
        " Mahesh is one of the best hard-working developer in our team ,he worked every day vigorously and his involvement in Angular development is much commendable.",
      person: "-Bhavani Haridass, Technical Lead in HCLTech",
    },
  ];

  return (
    <div className="contactbackground">
      <Container>
        <Row className="textbackground">
          <div class="col-12">
            <h1 class="testimonial-section-sub-heading mb-3 d-none d-lg-flex d-md-flex  d-flex justify-content-center headCenterTest">
              Testimonials
            </h1>
            <h1 class="testimonial-section-sub-heading mb-3 link d-md-none  d-lg-none d-xl-none center">
              Testimonials
            </h1>
            <h1 class="testimonial-section-heading mb-3">Our Members Says</h1>
          </div>
          <Col md={12}>
            <Carousel>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="col-12 demo-item"
                  style={{ backgroundColor: "black" }}
                >
                  <span className="col-2 sssd">
                    <img
                      src={image.src}
                      className="image-test"
                      alt="personimage"
                    />
                  </span>

                  <p className="col-6 des">{image.description}</p>

                  <h4 className="col-3 name">{image.person}</h4>
                </div>
              ))}
            </Carousel>
          </Col>

          <Col md={12}>
          <h2 className="contacthead">Get In Touch</h2>
          <p className="contactpara">
            I’m currently searching for opportunities for a front-end developer
            role. <br /> If there is any vacancy based on my skill I'm ready to
            work and my inbox is always open. Whether
            <br /> you have any further questions or just want to say hi, <br />
            I’ll try my best to get back to you!
          </p>

          <div className="contactbtn">
            <button
              className="contactbutton"
              // className="contactbtn"
              onClick={() => {
                window.open("tel:7013033380");
              }}
            >
              <AiOutlinePhone className="icon1" />
            </button>
            <button
              onClick={() => {
                window.location = "mailto:maheshtammineni2222@gmail.com";
              }}
              className="contactbutton"
            >
              <AiOutlineMail className="icon1" />
            </button>
          </div>


     
          </Col>
        

        
          <Col md={12}>

          <p>
          <hr />
          <span className="sgg">Designed & Built by Mahesh Tammineni</span>
        </p>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default Contactpage;
