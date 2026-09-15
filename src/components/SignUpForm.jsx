import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";

export const SignUpForm = () => {
  const [form, setForm] = useState({});

  const fields = [
    {
      label: "Name",
      placeholder: "John Smith",
      required: true,
      type: "text",
      name: "name",
    },
    {
      label: "Email",
      placeholder: "john@gmail.com",
      required: true,
      type: "email",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "****",
      required: true,
      type: "password",
      name: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "****",
      required: true,
      type: "password",
      name: "confirmPassword",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match");
    }
    console.log(form);
  };
  return (
    <div className="border rounded p-4">
      <h4 className="mb-4">SignUp Now!</h4>
      <Form onSubmit={handleOnSubmit}>
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

export default SignUpForm;
