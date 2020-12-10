import Axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.defaults.headers.common["Content-Type"] = "application/json";

instance.interceptors.request.use(req => {
  const token: string | null = localStorage.getItem("token");
  if (token) req.headers.common["x-auth-token"] = token;
  return req;
});

export default instance;