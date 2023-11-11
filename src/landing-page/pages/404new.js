import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./404.css";
import img404 from "./images/404.png";

export const Page404New = (props) => {
  return (
    <>
      <div className="p404-body">
        <Container className="p404-cont ">
          <Row>
            <Col xs={12}>
              <div className="new404">
                <h2 className="page">Page</h2>
                <h2 className="not-box">Not</h2>
                <h2 className="page">Found</h2>
                <div className="">
                  <img src={img404} className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Page404New;
