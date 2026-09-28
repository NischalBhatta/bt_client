import React from "react";

import Table from "react-bootstrap/Table";

function TransactionTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Out</th>
          <th>In</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Salar</td>
          <td></td>
          <td>300</td>
        </tr>
        <tr className="fw-bold text-end">
          <td colSpan={3}>Total Balance</td>
          <td>xxxx</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TransactionTable;
