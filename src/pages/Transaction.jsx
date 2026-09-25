import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";

const Transaction = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded ">
        <Col md={6}>
          <TransactionForm />
          <hr />
          <TransactionTable />
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
};

export default Transaction;
