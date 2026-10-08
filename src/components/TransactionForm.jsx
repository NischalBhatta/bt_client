import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import Button from "react-bootstrap/Button";
import useForm from "../hooks/useForm";
import { toast } from "react-toastify";
import { addTransaction } from "../helpers/axiosHelper";
import { useUser } from "../context/UserContext";

const initialState = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};

const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { getTransaction, toggleMode } = useUser();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await addTransaction(form);
    toast[status](message);
    if (status === "success") {
      setForm(initialState);
      //call the function to fetch all the transaction
      getTransaction();
      //close the popup modal
      toggleMode(false);
    }
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
