import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./404.css";
import img404 from "./images/404.png";

export const Page404 = (props) => {
  return (
    <>
      <div className="p404-body">
        <Container className="p404-cont ">
          <Row>
            <Col xs={12} lg={4}>
              <h2 className="page">Page</h2>
              <h2 className="not-box">Not</h2>
            </Col>
    
          </Row>

          <Row> <Col xs={12} lg={12} >
              <h2 className="page">Found</h2>
            </Col>
            </Row>

             <Row> 
             <Col xs={10} lg={3}>
           
           <p className="content" >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Odio pellentesque in dolor bibendum netus elementum aliquet.
             Sit curabitur aliquet gravida elit. Dolor fermentum posuere sit nibh consectetur.
             Quam dis amet nunc lectus. Nulla sed adipiscing a mus.
           </p>
           
         </Col>
         <Col xs={12} lg={9} >
              <img src={img404} className="img-fluid img404" />
            </Col>
            </Row>
        </Container>
      </div>
    </>
  );
};

export default Page404;
