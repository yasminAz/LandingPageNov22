import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./client-landingPage.css";
import img2 from "../../images/client-landing-img2.png";
import img3 from "../../images/featuresIMG.png";
import img4 from "../../images/contractIMG.png";
import HeaderNav from "../../components/header-nav/header-nav";
import howItWorksImg from "../../images/clint-howItWorks.svg";
import imglastSection from "../../images/imglastSection.png";
import cost from "../../images/landingCostIcon.svg";
import time from "../../images/timerLanding.svg";
import risk from "../../images/riskLanding.svg";
import logo5 from "../../images/bosch.png";
import logo4 from "../../images/ing.png";
import logo3 from "../../images/twitter.png";
import logo2 from "../../images/microsoft.png";
import logo1 from "../../images/nivida.png";

import MainFooter from "../../components/landing-pages-footer/main-footer";

export const ClientLanding = (props) => {
  const history = useHistory();

  return (
    <>
      <div className="client-bg">
        <HeaderNav client="1" isLogin={props.isLogin == 1 ? 1 : 0} />
        <Container>
          <Row>
            <Col xs={12}>
              <div className="CLandingPCont">
                <div className="text-cont">
                  <h1>
                    {/* We’ll help you develop software without giving up quality,
                    speed, or reliability. */}
                    <strong>Find</strong> and <strong>hire</strong> the best
                    <br />
                    tech talent <strong>within days!</strong>
                  </h1>
                  <p>
                    {/* Whether it's an app, or a web app, SaaS, fintech, or a
                    marketplace, scoped, or unscoped, any kind of software,
                    <br />
                    We’ll get it done for you, easily. */}
                    Whether its on contracting basis, or permanent employment,
                    we’ll help you source, screen and vet the best tech
                    candidates.
                  </p>
                  <button
                    onClick={() => history.push("/client/pickplan")}
                    id="client-get-started-tag"
                  >
                    {/* Get Started */}
                    Start Hiring
                  </button>
                </div>
                <div className="img-cont">
                  <img src={img2} className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <h2 className="partners-title">Our Partners Worked with</h2>
              <div className="partners-worked-with-container">
                <img src={logo1} className="partners-worked-with-img" />
                <img src={logo2} className="partners-worked-with-img" />
                <img src={logo3} className="partners-worked-with-img" />
                <img src={logo4} className="partners-worked-with-img" />
                <img src={logo5} className="partners-worked-with-img" />
              </div>
            </Col>
          </Row>
          <Row className="reasons-tapflow">
            <Col xs={12}>
              <h4>
                {/* Tapflow is the best way to outsource software development. Why? */}
                Tapflow is the best way to hire engineers. why?
              </h4>
            </Col>
            <Col xs={12} lg={4}>
              {/* <img src={reason1} className="img-fluid client-reasons-img" />
              <h5>
               
                Super fast.
              </h5>
              <p>
                We have a large pool that is sourced and vetted. All you gotta
                do is pick the best fits. and finalize the agreement.
              </p> */}
              <div className="CL-Landing-colorfulBox greenBox">
                <div class="wrapingimage">
                  <img src={cost} alt="image" />{" "}
                </div>
                <h3 className="landing-colorful-box-title">
                  50% Less Cost, same quality
                </h3>
                <p className="landing-colorful-box-text">
                  With our huge network of talent, you’ll find the best quality
                  for your budget.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              {/* <img src={reason2} className="img-fluid client-reasons-img" />
              <h5>
                100% Risk-free
              </h5>
              <p>
                You have a 2-week trial period. if you don’t like it, dropt it.
                and exchange any engineer during the period of contract.
              </p> */}
              <div className="CL-Landing-colorfulBox yellowBox">
                <div class="wrapingimage">
                  <img src={time} alt="image" />{" "}
                </div>
                <h3 className="landing-colorful-box-title">
                  75% less hiring time!
                </h3>
                <p className="landing-colorful-box-text">
                  Automate sourcing and vetting with our tech talent pipelines.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="CL-Landing-colorfulBox redBox">
                <div class="wrapingimage">
                  <img src={risk} alt="image" />{" "}
                </div>
                <h3 className="landing-colorful-box-title">100% Risk Free</h3>
                <p className="landing-colorful-box-text">
                  With 2 weeks trial, and lifetime of replacement, you’ll never
                  have to worry
                </p>
              </div>
              {/* <img src={reason3} className="img-fluid client-reasons-img" />
              <h5>
                Top quality
              </h5>
              <p>
                All engineers are vetted for quality. Interviews are conducted
                and skills are assessed. You took that off your shoulder.
              </p> */}
            </Col>
          </Row>
          <Row className="client-landing-imgANDtext">
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              lg={{ span: 12, order: 2 }}
              xl={{ span: 6, order: 1 }}
            >
              <h2 className="client-landing-imgANDtext-title">
                <strong>Features</strong>
              </h2>
              <p className="client-landing-imgANDtext-text">
                <strong>Personalized Candidate Pipelines</strong> With The
                Highest Fit Rates
              </p>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              lg={{ span: 12, order: 1 }}
              xl={{ span: 6, order: 2 }}
            >
              <img src={img3} className="client-landing-imgANDtext-image" />
            </Col>
          </Row>
          <Row className="client-landing-imgANDtext">
            <Col xs={12} md={6} lg={{ span: 12 }} xl={6}>
              <img src={img4} className="client-landing-imgANDtext-image" />
            </Col>
            <Col xs={12} md={6} lg={12} xl={6}>
              <h2 className="client-landing-imgANDtext-title">
                To Make Your Life <strong>Easy</strong>
              </h2>
              <p className="client-landing-imgANDtext-text">
                <strong>Digital Contracts</strong> That Are Automatically
                Generated
              </p>
            </Col>
          </Row>
          <Row className="client-how-it-works-tapflow">
            <Col xs={12}>
              <h4>How it works</h4>
            </Col>
            <Col xs={12}>
              <img src={howItWorksImg} className="img-fluid" />
            </Col>
            <Col xs={12} lg={3}>
              <h5>step 1.</h5>
              <h6>Signup</h6>
            </Col>
            <Col xs={12} lg={3}>
              <h5>step 2.</h5>
              <h6>
                {/* Tell us what you need to build */}
                Post A Role
              </h6>
            </Col>
            <Col xs={12} lg={3}>
              <h5>step 3.</h5>
              <h6>
                {/* Get matched with the right-fit partner */}
                vet the matching candidates
              </h6>
            </Col>
            <Col xs={12} lg={3}>
              <h5>step 4.</h5>
              <h6>
                {/* Start building high-end software ! */}
                create a contract
              </h6>
            </Col>
          </Row>
        </Container>
        <section className="last-section">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="CL-lastSectionBox">
                  <div className="text-cont">
                    <h1>
                      {/* Let’s help you develop the best software */}
                      Create a role and start hiring
                    </h1>
                    <button
                      onClick={() => history.push("/client/pickplan")}
                      id="client-get-started-tag"
                      className="btnLG activeGreen"
                    >
                      {/* Get Started */}
                      Start Hiring
                    </button>
                  </div>
                  <div className="img-cont">
                    <img src={imglastSection} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <MainFooter client="1" />
      </div>
    </>
  );
};

export default ClientLanding;
