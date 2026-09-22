import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { loginUser, postNewUser } from "../helpers/axiosHelper";

export const SignInForm = () => {
  const [form, setForm] = useState({});

  const fields = [
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
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const pendingReq = loginUser(form);

    toast.promise(pendingReq, {
      pending: "Please wait ....",
    });
    const { status, message, user, accessJWT } = await pendingReq;
    toast[status](message);
    console.log(user, accessJWT);
  };
  return (
    <div className="border rounded p-4">
      <h4 className="mb-4">SignIn Now!</h4>
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

export default SignInForm;
