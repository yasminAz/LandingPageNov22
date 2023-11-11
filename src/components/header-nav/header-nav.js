import React from "react";
import "./header-nav.css";
import { Link } from "react-router-dom";
import tapflow from "../../images/tapflow-logo.svg";
import tapflowClient from "../../images/ClientLogo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

function HeaderNav(props) {
  const [state, setState] = useState("none");
  const [scroll, setScroll] = useState("transparent");

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setState(
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      );
      if (props.client) {
        setScroll("#FFFFFF");
      } else {
        setScroll("#FFFCF3");
      }
    } else {
      setState("none");
      // setScroll("transparent");
      if (props.client) {
        setScroll("#FFFFFF");
      } else {
        setScroll("#FFFCF3");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    if (props.client) {
      setScroll("#FFFFFF");
    } else {
      setScroll("#FFFCF3");
    }
  });
  return (
    <>
      <Navbar
        expand="lg"
        className="landing-navbar"
        style={{ boxShadow: state, backgroundColor: scroll }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={props.client ? tapflowClient : tapflow}
              className="HeaderNav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Link to="/aboutUs">About Us</Link>
              <Link to="/community">Community</Link>
              <Link to="/roadmap">Roadmap</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
