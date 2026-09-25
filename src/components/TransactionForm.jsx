import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import Button from "react-bootstrap/Button";
import useForm from "../hooks/useForm";

const initialState = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};

const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const fields = [
    {
      label: "Title",
      placeholder: "Salary",
      required: true,
      type: "text",
      name: "title",
      value: form.title,
    },
    {
      label: "Amount",
      placeholder: "44",
      required: true,
      type: "number",
      name: "amount",
    },
    {
      label: "Transaction Date",
      required: true,
      type: "date",
      name: "tdate",
      value: form.tdate,
    },
  ];

  return (
    <div className="border rounded p-4">
      <h4 className="mb-4">Add Your Transaction!</h4>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Transaction Type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange}>
            <option value="">--select--</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Form.Group>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TransactionForm;
