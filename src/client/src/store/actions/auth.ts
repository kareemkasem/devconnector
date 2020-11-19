import { Dispatch } from "redux";
import { AxiosResponse } from "axios";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SetAlertType,
  USER_LOADED,
  AUTH_ERROR,
  LoginFailType,
  LoginSuccessType,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LogoutType,
  LOGOUT,
  ClearProfileType,
  CLEAR_PROFILE,
} from "./action.types";
import {
  SignupFailType,
  SignupSuccessType,
  UserLoadedType,
  AuthErrorType,
} from "./action.types";
import { LoginParams, SignupParams, UserType } from "../../global.types";
import alertErrors from "../../utils/redux-alert-errors";
import AxiosConfig from "../../axios.config";
import axiosInstance from "../../axios.config";

export const loadUser = () => async (
  dispatch: Dispatch<UserLoadedType | AuthErrorType>
) => {
  const token: string | null = localStorage.getItem("token");
  if (!token) return;
  try {
    let user: UserType;
    const userCookieExists = document.cookie.substr(0, 4);
    if (userCookieExists) {
      user = JSON.parse(document.cookie.substr(5));
    } else {
      const response = await axiosInstance().get<null, AxiosResponse<UserType>>(
        "/api/auth",
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      user = response.data;
      document.cookie = `user=${JSON.stringify(user)}; max-age=${60 * 5}`;
    }

    dispatch({
      type: USER_LOADED,
      payload: user,
    } as UserLoadedType);
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
    } as AuthErrorType);
  }
};

export const signup = ({ name, email, password }: SignupParams) => async (
  dispatch: Dispatch<SignupSuccessType | SignupFailType | SetAlertType>
) => {
  const data = { name, email, password };

  try {
    const response = await axiosInstance().post<
      SignupParams,
      AxiosResponse<{ token: string }>
    >("/api/auth/signup", data);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data,
    } as SignupSuccessType);

    // @ts-ignore
    dispatch(loadUser());
  } catch (error) {
    alertErrors(error, dispatch);

    dispatch({
      type: SIGNUP_FAIL,
    } as SignupFailType);
  }
};

export const login = ({ email, password }: LoginParams) => async (
  dispatch: Dispatch<
    LoginSuccessType | LoginFailType | SetAlertType | UserLoadedType
  >
) => {
  const data = { email, password };

  try {
    const response = await axiosInstance().post<
      SignupParams,
      AxiosResponse<{ token: string }>
    >("/api/auth/login", data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    } as LoginSuccessType);

    // @ts-ignore
    dispatch(loadUser());
  } catch (error) {
    alertErrors(error, dispatch);

    dispatch({
      type: LOGIN_FAIL,
    } as LoginFailType);
  }
};

export const logout = () => (
  dispatch: Dispatch<LogoutType | ClearProfileType>
) => {
  localStorage.removeItem("token");
  document.cookie = "";
  dispatch({
    type: CLEAR_PROFILE,
  } as ClearProfileType);
  dispatch({
    type: LOGOUT,
  } as LogoutType);
};
