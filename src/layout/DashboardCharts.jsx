import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomKPI from "../components/CustomKPI";
import DoughnutChart from "../components/charts/DoughnutChart";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import balanceIcon from "../assets/balanceIcon.png";
import incomeIcon from "../assets/incomeIcon.png";
import expenseIcon from "../assets/expenseIcon.png";

const DashboardCharts = () => {
  return (
    <>
      {/* A Row of balance, Income and expenses KPI */}
      <Row>
        <Col md={4}>
          <CustomKPI iconSrc={balanceIcon} bgColor="warning" />
        </Col>
        <Col md={4}>
          <CustomKPI iconSrc={incomeIcon} bgColor="success" />
        </Col>
        <Col md={4}>
          <CustomKPI iconSrc={expenseIcon} bgColor="danger" />
        </Col>
      </Row>
      {/* A row of Bar graph and Doughnut Graph */}
      <Row>
        <Col>
          <BarChart />
        </Col>

        <Col>
          <DoughnutChart />
        </Col>
      </Row>
      {/* A row of income and expenses line graph */}
      <Row>
        <Col>
          <LineChart />
        </Col>
        <Col>
          <LineChart />
        </Col>
      </Row>
    </>
  );
};

export default DashboardCharts;
