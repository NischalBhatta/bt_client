import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SignUpForm from "../components/SignUpForm";
import { FinancialTips } from "../components/FinancialTips";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import SignInForm from "../components/SignInForm";

const Login = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded ">
        <Col md={6}>
          <SignInForm />
        </Col>
        <Col md={6}>
          <div
            className="d-flex flex-column justify-content-center fs-1"
            style={{
              height: "100%",
            }}
          >
            <div className="text-danger text-decoration-line-through">
              <BsGraphDownArrow />
              Reduce Your Expense
            </div>
            <div className="text-success">
              <BsGraphUpArrow />
              Increase Your Income
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
