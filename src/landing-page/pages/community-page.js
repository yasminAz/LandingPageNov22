import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderNav from "../../components/header-nav/header-nav";
import MainFooter from "../../components/landing-pages-footer/main-footer";
import "./community-page.css";
import img1 from "./images/community-main-image.svg";
// import img2 from "./images/splitter-image.svg";
import img3 from "./images/instagram-logo.svg";
import img4 from "./images/arrow.svg";
import img5 from "./images/file-header.svg";
import img6 from "./images/twitter-logo.svg";
import img7 from "./images/slack-logo.svg";
import img8 from "./images/linkedin-logo.svg";
import obj1 from "./images/obj1.svg";
import obj2 from "./images/obj2.svg";
import obj3 from "./images/obj3.svg";
import obj4 from "./images/obj4.svg";
import obj5 from "./images/obj5.svg";
import obj6 from "./images/obj66.svg";
import { Helmet } from "react-helmet";

export const Community = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tapflow | Community</title>
        <meta
          name="description"
          content="We help you build software and hire engineers without losing quality, reliability or speed..."
        />
        <meta
          name="keywords"
          content="Outsource, Software development, Agency, Marketing, Design, Hire, Agencies, Graphic and Design, Graphic, Design, Development Agency, Marketing Agency,  Web Development, Mobile App Development, Application Development, App Development,Web Design, User Experience Design,Logo Design,Graphic Design,Digital Design,Digital Marketing,SEO,Social Media Marketing,Mobile Marketing,Content Marketing,Search Marketing,Artificial Intelligence,Blockchain, App Developer, Web Developer, Designer, Marketer, Developer"
        />
        <link href="http://wwww.tapflow.app/community" />
      </Helmet>
      <div className="community-body">
        <HeaderNav />
        <Container className="community-cont">
          <Row>
            <Col xs={12} lg={7}>
              <img src={img1} className="img-fluid" />
            </Col>
            <Col xs={12} lg={5} className="community-first-box-alignment">
              <div>
                <h2 className="become-box">Become a part</h2>
                <h3 className="h3-content">of the Tapflow Community!</h3>
                <p className="first-content">
                  The Tapflow community aims at exchanging value between people
                  in similar professional fields. Members of our community can
                  exchange knowledge and experience, get inspired, ask
                  questions, share entertainment, and most importantly, build
                  networks.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="community-splitter"></div>

        <MainFooter />
      </div>
    </>
  );
};

export default Community;
