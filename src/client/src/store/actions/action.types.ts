import { CallHistoryMethodAction } from "connected-react-router";
import { AlertType, ProfileType, UserType } from "../../global.types";

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const GET_PROFILE = "GET_PROFILE";
export const PROFILE_ERROR = "PROFILE_ERROR";

export interface SetAlertType {
  type: typeof SET_ALERT;
  payload: AlertType;
}
export interface RemoveAlertType {
  type: typeof REMOVE_ALERT;
  payload: {
    id: string;
  };
}
export interface SignupSuccessType {
  type: typeof SIGNUP_SUCCESS;
  payload: {
    token: string;
  };
}
export interface SignupFailType {
  type: typeof SIGNUP_FAIL;
}
export interface UserLoadedType {
  type: typeof USER_LOADED;
  payload: UserType;
}
export interface AuthErrorType {
  type: typeof AUTH_ERROR;
}
export interface LoginSuccessType {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
  };
}
export interface LoginFailType {
  type: typeof LOGIN_FAIL;
}
export interface LogoutType {
  type: typeof LOGOUT;
}
export interface GetProfile {
  type: typeof GET_PROFILE;
  payload: ProfileType;
}
export interface ProfileError {
  type: typeof PROFILE_ERROR;
  payload: { status: string; statusText: string };
}

export type AppActionTypes =
  | CallHistoryMethodAction //for router bindings
  | SetAlertType
  | RemoveAlertType
  | SignupSuccessType
  | SignupFailType
  | UserLoadedType
  | AuthErrorType
  | LoginSuccessType
  | LoginFailType
  | LogoutType
  | GetProfile
  | ProfileError;
