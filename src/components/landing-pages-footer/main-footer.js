import React from "react";
import "./main-footer.css";
import { Link } from "react-router-dom";
import tapflow from "../../images/tapflow-logo.svg";
import tapflowClient from "../../images/ClientLogo.svg";
import { Container, Row, Col } from "react-bootstrap";

import insta from "../../images/insta-footer.svg";
import twitt from "../../images/twitter-footer.svg";
import li from "../../images/li-footer.svg";
function MainFooter(props) {
  return (
    <>
      <div
        className={props.client ? "main-footer client-footer" : "main-footer"}
      >
        <Container>
          {/* <div className="footer-body">
          <img src={tapflow} />
          <span>This will be the footer soon! </span>
        </div> */}
          <Row>
            <Col xs={12} lg={3}>
              <Row>
                <Col xs={12}>
                  <div className="logo-and-media">
                    <div className="logo">
                      {/* <img src={tapflow} className="img-fluid" /> */}
                      <img
                        src={props.client ? tapflowClient : tapflow}
                        className="img-fluid"
                      />
                    </div>
                    <div className="social-media">
                      <ul>
                        <li
                          onClick={() =>
                            window.open(
                              "https://www.instagram.com/tapflowapp/",
                              "_blank"
                            )
                          }
                          className="pointer-cursor"
                        >
                          <img src={insta} className="img-fluid" />
                          <p>Instagram</p>
                        </li>
                        <li
                          onClick={() =>
                            window.open(
                              "https://twitter.com/Tapflowapp",
                              "_blank"
                            )
                          }
                          className="pointer-cursor"
                        >
                          <img src={twitt} className="img-fluid" />
                          <p>Twitter</p>
                        </li>
                        <li
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/company/tapflow/",
                              "_blank"
                            )
                          }
                          className="pointer-cursor"
                        >
                          <img src={li} className="img-fluid" />
                          <p>LinkedIn</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={9}>
              <Row className="temp-class-when-there-is-nofooter-links">
                <Col xs={12} lg={4}>
                  <div className="footer-about footer-links-Col">
                    <Link className="main-link" to="/aboutUs">
                      About Us
                    </Link>
                  </div>
                </Col>
                <Col xs={12} lg={4}>
                  <div className="footer-community footer-links-Col">
                    <Link className="main-link" to="/community">
                      Community
                    </Link>
                  </div>
                </Col>
                <Col xs={12} lg={4}>
                  <div className="footer-roadmap footer-links-Col">
                    <Link className="main-link" to="/roadmap">
                      Road Map
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MainFooter;
