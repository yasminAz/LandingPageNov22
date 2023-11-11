import React from "react";
import HeaderNav from "../../components/header-nav/header-nav";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./roadmap.css";
import MainFooter from "../../components/landing-pages-footer/main-footer";
import start from "./images/start.svg";
import mediumLink from "./images/medium-link-map.svg";
import blackLink from "./images/black-link-map.svg";
import greenX from "../../images/green-x.svg";
import yellowCurly from "../../images/yellow-curly.svg";
import greenSwirl from "../../images/green-swril.svg";
import blueX from "../../images/blue-x.svg";
import orangeX from "../../images/orange-x.svg";
import redX from "../../images/extra-red.svg";
import { Helmet } from "react-helmet";

function RoadMap() {
  return (
    <div className="roadmap-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tapflow | Roadmap</title>
        <meta name="description" />
        <link href="http://wwww.tapflow.app/roadmap" />
        <meta
          name="keywords"
          content="Outsource, Software development, Agency, Marketing, Design, Hire, Agencies, Graphic and Design, Graphic, Design, Development Agency, Marketing Agency,  Web Development, Mobile App Development, Application Development, App Development,Web Design, User Experience Design,Logo Design,Graphic Design,Digital Design,Digital Marketing,SEO,Social Media Marketing,Mobile Marketing,Content Marketing,Search Marketing,Artificial Intelligence,Blockchain, App Developer, Web Developer, Designer, Marketer, Developer"
        />
      </Helmet>
      <HeaderNav />
      <Container>
        <Row>
          <Col xs={12} lg={{ offset: 5, span: 7 }} xl={{ offset: 7, span: 5 }}>
            <div className="roadmap-header">
              <h1>
                Road<h2 className="map-bg">map</h2>
              </h1>
              <h3>#Buildingpublicly</h3>
              <p>Because transparency means everything</p>
            </div>
          </Col>
        </Row>
      </Container>
      <MainFooter />
    </div>
  );
}

export default RoadMap;
