import Axios, { AxiosInstance } from "axios";
export class AxiosConfig {
  constructor() {
    this.configureDefaults();
  }

  private token: string | null = localStorage.getItem("token");

  public instance: AxiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
  });

  private configureDefaults() {
    this.instance.defaults.headers.common["Content-Type"] = "application/json";
    if (this.token)
      this.instance.defaults.headers.common["x-auth-token"] = this.token;
  }
}

const axiosInstance = () => {
  return new AxiosConfig().instance;
};
export default axiosInstance;
