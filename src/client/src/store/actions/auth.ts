import { Dispatch } from "redux";
import { v4 as uuid } from "uuid";
import { AxiosResponse } from "axios";

import AxiosRequest from "../../axios.config";
import { SIGNUP_SUCCESS, SIGNUP_FAIL, SetAlertType, SET_ALERT } from "./action.types";
import { SignupFailType, SignupSuccessType } from "./action.types";
import { ServerError } from "../types";

export const signup = ({ name, email, password }: SignupParams) => async (
  dispatch: Dispatch<SignupSuccessType | SignupFailType | SetAlertType>
) => {
  const data = { name, email, password };

  try {
    const result = await AxiosRequest.post<
      SignupParams,
      AxiosResponse<{ token: string }>
    >("/api/auth/signup", data);

    console.log(result);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    const errorResponse: { errors: ServerError[] } | undefined = error.response.data;
    errorResponse?.errors.forEach((err: ServerError) => {
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
