import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { loginUser, postNewUser } from "../helpers/axiosHelper.js";
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (user?._id) {
      navigate("/dashboard");
    }
  }, [user]);

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
    const res = await pendingReq;
    const { status, message, user, accessJWT } = res;
    toast[status](message);

    if (status === "success") {
      setUser(user);
    }
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
