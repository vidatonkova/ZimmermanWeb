import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
        return (
        <div>
            <Container>
              <Row>
                  <p className = "sample" > ur all hoes</p>
                  <Col>Home Page</Col>
              </Row>
              <div className="spacer" > &nbsp; </div>
              <div className="spacer" > &nbsp; </div>
              <div className="spacer" > &nbsp; </div>
              <Row>
                  <Col> hi bbs</Col>
              </Row>
            </Container>
        </div>
        );
};

export default Home;

