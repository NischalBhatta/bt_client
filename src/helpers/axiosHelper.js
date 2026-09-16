import axios from "axios";
const apiEp = "http://localhost:8000/api/v1";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
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
