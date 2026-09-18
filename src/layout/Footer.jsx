import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Footer = () => {
  return (
    <Container className="bg-dark p-5">
      <Row className="text-center">
        <Col>
          &copy; CopyRight all reserved. || Made by <a href="">Nischal </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
