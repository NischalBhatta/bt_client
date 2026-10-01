import { createContext, useContext, useState } from "react";
import { fetchTransaction } from "../helpers/axiosHelper";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transaction, setTransaction] = useState([]);
  const [show, setShow] = useState(false);

  const toggleMode = (value) => setShow(value);
  const getTransaction = async () => {
    const { status, response } = await fetchTransaction();

    status === "success" && setTransaction(response);

    // call axioshelper to get transaction and mount it
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, transaction, getTransaction, toggleMode, show }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
