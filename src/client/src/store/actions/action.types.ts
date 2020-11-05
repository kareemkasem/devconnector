import { Alert } from "../types";

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export type SetAlerttype = {
  type: typeof SET_ALERT;
  payload: Alert;
};
export type RemoveAlertType = {
  type: typeof REMOVE_ALERT;
  payload: {
    id: string;
  };
};

export type AppActionTypes = SetAlerttype | RemoveAlertType;
