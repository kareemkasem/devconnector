import Axios, { AxiosInstance } from "axios";
export default class AxiosConfig {
  private token: string | null = localStorage.getItem("token");

  public instance: AxiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": this.token,
    },
  });
}
