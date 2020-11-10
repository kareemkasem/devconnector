import Axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.defaults.headers.common["Content-Type"] = "application/json";

const token: string | null = localStorage.getItem("token");
if (token) {
  instance.defaults.headers.common["x-auth-token"] = token;
} else {
  delete instance.defaults.headers.common["x-auth-token"];
}

export default instance;
