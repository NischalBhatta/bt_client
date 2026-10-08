import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomKPI from "../components/CustomKPI";
import DoughnutChart from "../components/charts/DoughnutChart";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";

const DashboardCharts = () => {
  return (
    <>
      {/* A Row of balance, Income and expenses KPI */}
      <Row>
        <Col>
          {/* Balance KPI */}
          <CustomKPI />
        </Col>
        <Col>
          {/* Income KPI */}
          <CustomKPI />
        </Col>
        <Col>
          {/* Expenses KPI */}
          <CustomKPI />
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
