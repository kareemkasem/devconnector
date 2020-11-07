import { SIGNUP_SUCCESS, SIGNUP_FAIL, SetAlertType, SET_ALERT } from "./action.types";
import { SignupFailType, SignupSuccessType } from "./action.types";
import { ServerError } from "../types";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { v4 as uuid } from "uuid";

export const signup = ({ name, email, password }: SignupParams) => async (
  dispatch: Dispatch<SignupSuccessType | SignupFailType | SetAlertType>
) => {
  const data = { name, email, password };

  // @ts-ignore
  // import superagent from "superagent";
  // superagent
  //   .post(process.env.REACT_APP_BASEURL + "/api/auth/signup")
  //   .send(data)
  //   .set("Content-Type", "application/json")
  //   .end((err: any, res: any) => {
  //     console.log(JSON.parse(res.text));
  //   });

  /* Superagent returns the actual server object unlike Axios that just send only a javascript error*/

  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    baseURL: process.env.REACT_APP_BASEURL,
  };

  try {
    const result = await axios.post<SignupParams, AxiosResponse<{ token: string }>>(
      "/api/auth/signup",
      data,
      config
    );

    console.log(result);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.log(error.errors);
    error.response.errors?.forEach((err: ServerError) => {
      dispatch({
        type: SET_ALERT,
        payload: {
          id: uuid(),
          alertType: "danger",
          msg: err.msg,
        },
      });
    });

    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

interface SignupParams {
  name: string;
  email: string;
  password: string;
}
