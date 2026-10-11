import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { postNewUser } from "../helpers/axiosHelper";
import useForm from "../hooks/useForm.js";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const navigate = useNavigate();

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match");
    }
    const { status, message } = await postNewUser(rest);
    toast[status](message);

    if (status === "success") {
      // Clear the form fields back to initial state
      setForm(initialState);
      // Navigate to your login route
      navigate("/login");
    }
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
