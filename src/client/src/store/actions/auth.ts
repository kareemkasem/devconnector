import { Dispatch } from "redux";
import { v4 as uuid } from "uuid";
import { AxiosResponse } from "axios";

import AxiosRequest from "../../axios.config";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SetAlertType,
  SET_ALERT,
  USER_LOADED,
  AUTH_ERROR,
} from "./action.types";
import {
  SignupFailType,
  SignupSuccessType,
  UserLoadedType,
  AuthErrorType,
} from "./action.types";
import { ServerError, UserType } from "../types";
import store from "../configureStore";

export const loadUser = () => async (dispatch: Dispatch<any>) => {
  const token: string | null = localStorage.getItem("token");
  if (!token) return;
  try {
    const response = await AxiosRequest.get<null, AxiosResponse<UserType>>("/api/auth", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    dispatch({
      type: USER_LOADED,
      payload: response.data,
    } as UserLoadedType);
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    } as AuthErrorType);
    console.log(error.response);
  }
};

export const signup = ({ name, email, password }: SignupParams) => async (
  dispatch: Dispatch<SignupSuccessType | SignupFailType | SetAlertType>
) => {
  const data = { name, email, password };

  try {
    const response = await AxiosRequest.post<
      SignupParams,
      AxiosResponse<{ token: string }>
    >("/api/auth/signup", data);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data,
    } as SignupSuccessType);

    store.dispatch(loadUser());
  } catch (error) {
    const errorResponse: { errors: ServerError[] } = error?.response?.data;

    errorResponse?.errors?.forEach((err: ServerError) => {
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
    } as SignupFailType);
  }
};

interface SignupParams {
  name: string;
  email: string;
  password: string;
}
