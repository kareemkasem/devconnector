import { AlertType } from "../types";

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

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

export type AppActionTypes =
  | SetAlertType
  | RemoveAlertType
  | SignupSuccessType
  | SignupFailType;
