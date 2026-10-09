import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CustomKPI = ({ iconSrc, kpiType, kpiValue, bgColor = "white" }) => {
  return (
    <>
      <Row className={"bg-" + bgColor + " rounded text-black p-3 g-2"}>
        <Col md={4}>
          <img className="img-fluid" src={iconSrc} alt="" />
        </Col>
        <Col md={7} className="ms-2">
          <div className="border-bottom border-dark border-3">
            <h6>{kpiValue}</h6>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CustomKPI;
