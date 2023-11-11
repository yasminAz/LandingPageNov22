import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderNav from "../../components/header-nav/header-nav";
import MainFooter from "../../components/landing-pages-footer/main-footer";
import "./about-us.css";
import img1 from "./images/about-img-1.svg";
import img2 from "./images/about-img-2.svg";
import img3 from "./images/about-img-3.svg";
import { Helmet } from "react-helmet";

export const AboutUs = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tapflow | About us</title>
        <meta
          name="description"
          content="We help you build software and hire engineers without losing quality, reliability or speed..."
        />
        <meta
          name="keywords"
          content="Outsource, Software development, Agency, Marketing, Design, Hire, Agencies, Graphic and Design, Graphic, Design, Development Agency, Marketing Agency,  Web Development, Mobile App Development, Application Development, App Development,Web Design, User Experience Design,Logo Design,Graphic Design,Digital Design,Digital Marketing,SEO,Social Media Marketing,Mobile Marketing,Content Marketing,Search Marketing,Artificial Intelligence,Blockchain, App Developer, Web Developer, Designer, Marketer, Developer"
        />
        <link href="http://wwww.tapflow.app/aboutUs" />
      </Helmet>
      <HeaderNav />
      <div className="About-us-body">
        <Container className="">
          <Row>
            <Col xs={12} lg={6}>
              <h2 className="hi-box">Hi!</h2>
              <h2 className="title">
                We are <strong>Tapflow!</strong>
              </h2>
              <h4 className="firstSub">Let us introduce ourselves...</h4>
              <p className="firstcont">
                Tapflow is an online agency outsourcing marketplace with built
                in collaboration tools. We connect clients and projects with
                quality-vetted agencies from around the world. We specialize in
                IT but also work with Marketing and Design agencies.
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <img src={img1} className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
              <img src={img2} className="img-fluid" />
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
              <h2 className="title">
                Here’s our <strong>mission,</strong>
              </h2>

              <p className="firstcont">
                We want to bring scalability to the outsourcing world.
                Currently, companies are finding it very difficult to outsource.
                Finding the right agency has been a hassle, and the process of
                working with that agency has not been optimal.
                <br />
                <br /> We want to cut down that effort by 50% by picking the
                right agencies for them, and by providing them with the right
                collaboration tools to make the process easy.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <h2 className="title">
                And here’s our<strong>Vision</strong>
              </h2>

              <p className="firstcont">
                We see a world where all companies outsource a huge part of
                their operations. A world where agencies can be built using a
                sign up button. A world with the right infrastructure to
                maintain the fast growth of technology.
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <img src={img3} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <MainFooter />
    </>
  );
};

export default AboutUs;
