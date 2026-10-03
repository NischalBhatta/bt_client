import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";

function TransactionTable() {
  const [displayTrans, setDisplayTrans] = useState([]);
  const { transaction, toggleMode } = useUser();

  const [idsToDelete, setIdsToDelete] = useState([]);
  useEffect(() => {
    setDisplayTrans(transaction);
  }, [transaction]);
  // console.log(transaction);
  const balance = displayTrans.reduce((acc, trans) => {
    const amt = Number(trans.amount);
    return trans.type === "income" ? acc + amt : acc - amt;
  }, 0);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredTrans = transaction.filter(({ title }) => {
      return title.toLowerCase().includes(value.toLowerCase());
    });
    setDisplayTrans(filteredTrans);
  };

  const handleOnSelect = (e) => {
    const { checked, name, value } = e.target;
    console.log(checked, value);
    if (value === "all") {
      console.log("all selected");
    }
    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      setIdsToDelete(idsToDelete(id >= id !== value));
    }
    return;
  };
  console.log(idsToDelete);
  return (
    <>
      <div className="d-flex justify-content-between pt-3 mb-4">
        <div>{displayTrans.length} transactions found</div>
        <div>
          <Form.Control type="text" onChange={handleOnSearch} />
        </div>
        <div>
          <Button onClick={() => toggleMode(true)}>
            <FaPlus /> Add new transaction
          </Button>
        </div>
      </div>
      <div>
        <Form.Check label="Select All " value="all" onChange={handleOnSelect} />
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
          {displayTrans.length > 0 &&
            displayTrans.map((t, i) => (
              <tr key={t._id}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    label={t.createdAt.split("T")[0]}
                    value={t._id}
                    onChange={handleOnSelect}
                  />
                </td>
                <td>{t.title}</td>

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
