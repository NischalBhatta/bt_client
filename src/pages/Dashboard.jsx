import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DashboardCharts from "../layout/DashboardCharts";

const Dashboard = () => {
  return (
    <Container className="p-5">
      <Row className="bg-transparent p-2 rounded ">
        <Col md={6}>TODO Dashboard</Col>
        <DashboardCharts />
      </Row>
    </Container>
  );
};

export default Dashboard;
