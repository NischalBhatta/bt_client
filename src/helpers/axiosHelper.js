import axios from "axios";
const apiEp = import.meta.env.VITE_ROOT_API + "api/v1";

const getAccessJWT = () => {
  return localStorage.getItem("accessJWT");
};

const apiProcessor = async ({ method, url, data, headers }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response?.data) {
      return error.response.data;
    }
    return {
      status: error,
      message: error.message,
    };
  }
};

//User API Call

//Post New User
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: apiEp + "/users",
    data,
  };
  return apiProcessor(obj);
};

//Login User
export const loginUser = (data) => {
  const obj = {
    method: "post",
    url: apiEp + "/users/login",
    data,
  };
  return apiProcessor(obj);
};
//Get User
export const getUser = () => {
  const obj = {
    method: "get",
    url: apiEp + "/users",
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};

//Transaction API Call

//Insert New transaction
export const addTransaction = (data) => {
  const obj = {
    method: "post",
    url: apiEp + "/transactions",
    headers: {
      Authorization: getAccessJWT(),
    },
    data,
  };
  return apiProcessor(obj);
};

//Get User
export const fetchTransaction = () => {
  const obj = {
    method: "get",
    url: apiEp + "/transactions",
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};

//Delete transaction
export const deleteTransaction = (data) => {
  const obj = {
    method: "delete",
    url: apiEp + "/transactions",
    headers: {
      Authorization: getAccessJWT(),
    },
    data,
  };
  return apiProcessor(obj);
};
