import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomKPI from "../components/CustomKPI";
import DoughnutChart from "../components/charts/DoughnutChart";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import balanceIcon from "../assets/balanceIcon.png";
import incomeIcon from "../assets/incomeIcon.png";
import expenseIcon from "../assets/expenseIcon.png";
import { useUser } from "../context/UserContext";
import { formatChartData } from "../helpers/chartHelpers";

const DashboardCharts = () => {
  const { transaction, getTransaction } = useUser();

  const [dashboardData, setDashboardData] = useState(formatChartData([]));

  useEffect(() => {
    getTransaction();
  }, []);

  useEffect(() => {
    if (!Array.isArray(transaction)) return;

    const recordsToShow = 10;
    setDashboardData(formatChartData(transaction.slice(-recordsToShow)));
  }, [transaction]);

  return (
    <>
      {/* A Row of balance, Income and expenses KPI */}
      <Row>
        <Col md={4}>
          <CustomKPI
            iconSrc={balanceIcon}
            bgColor="warning"
            kpiType="Balance"
            kpiValue={dashboardData.balance.amount}
          />
        </Col>
        <Col md={4}>
          <CustomKPI
            iconSrc={incomeIcon}
            bgColor="success"
            kpiType="Income"
            kpiValue={dashboardData.income.amount}
          />
        </Col>
        <Col md={4}>
          <CustomKPI
            iconSrc={expenseIcon}
            bgColor="danger"
            kpiType="Expense"
            kpiValue={dashboardData.expense.amount}
          />
        </Col>
      </Row>
      {/* A row of Bar graph and Doughnut Graph */}
      <Row>
        <Col md={6}>
          <BarChart
            data={dashboardData.combined.data}
            options={dashboardData.combined.options}
          />
        </Col>

        <Col md={6}>
          <DoughnutChart data={dashboardData.balance.chartData} />
        </Col>
      </Row>
      {/* A row of income and expenses line graph */}
      <Row>
        <Col md={6}>
          <LineChart />
        </Col>
        <Col md={6}>
          <LineChart />
        </Col>
      </Row>
    </>
  );
};

export default DashboardCharts;
