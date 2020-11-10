import Axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.defaults.headers["Content-Type"] = "application/json";

export default instance;
