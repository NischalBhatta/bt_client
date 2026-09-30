import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";

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
    <>
      <div className="d-flex justify-content-between pt-3 mb-4">
        <div>{transaction.length} transactions found</div>
        <div>
          <Form.Control type="text" />
        </div>
        <div>
          <Button>
            <FaPlus /> Add new transaction
          </Button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Out</th>
            <th>In</th>
          </tr>
        </thead>
        <tbody>
          {transaction.length > 0 &&
            transaction.map((t, i) => (
              <tr key={t._id}>
                <td>{i + 1}</td>
                <td>{t.title}</td>
                <td>{t.createdAt.split("T")[0]}</td>
                {t.type === "expenses" && (
                  <>
                    <td className="out">${t.amount}</td>
                    <td></td>
                  </>
                )}
                {t.type === "income" && (
                  <>
                    <td></td>
                    <td className="in">${t.amount}</td>
                  </>
                )}
              </tr>
            ))}
          {/* <tr>
          <td>1</td>
          <td>Salar</td>
          <td></td>
          <td>300</td>
        </tr> */}
          <tr className="fw-bold text-center">
            <td colSpan={3}>Total Balance</td>
            <td colSpan={2}>${balance}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TransactionTable;
