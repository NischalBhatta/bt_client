import React, { useEffect } from "react";

import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";

function TransactionTable() {
  const { transaction } = useUser();
  console.log(transaction);
  const balance = transaction.reduce((acc, trans) => {
    const amt = Number(trans.amount);
    return trans.type === "income" ? acc + amt : acc - amt;
  }, 0);
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
        {transaction.length > 0 &&
          transaction.map((t, i) => (
            <tr key={t._id}>
              <td>{i + 1}</td>
              <td>{t.title}</td>
              {t.type === "expenses" && (
                <>
                  <td>${t.amount}</td>
                  <td></td>
                </>
              )}
              {t.type === "income" && (
                <>
                  <td></td>
                  <td>${t.amount}</td>
                </>
              )}

              <td>{t.createdAt.split("T")[0]}</td>
            </tr>
          ))}
        {/* <tr>
          <td>1</td>
          <td>Salar</td>
          <td></td>
          <td>300</td>
        </tr> */}
        <tr className="fw-bold text-end">
          <td colSpan={3}>Total Balance</td>
          <td colSpan={2}>${balance}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TransactionTable;
