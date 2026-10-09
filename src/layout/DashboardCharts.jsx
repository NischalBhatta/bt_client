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
  const { transactions, getTransactions } = useUser();

  const [dashboardData, setDashboardData] = useState(formatChartData([]));

  useEffect(() => {
    if (!Array.isArray(transactions)) return;
    setDashboardData(formatChartData(transactions));
  }, [transactions]);

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
