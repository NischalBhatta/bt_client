import axios from "axios";
const apiEp = "http://localhost:8000/api/v1";

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
export const getUser = (data) => {
  const obj = {
    method: "get",
    url: apiEp + "/users",
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};

//
