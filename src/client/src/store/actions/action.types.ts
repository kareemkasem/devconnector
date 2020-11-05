import { AlertType } from "../types";

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export type SetAlertType = {
  type: typeof SET_ALERT;
  payload: AlertType;
};
export type RemoveAlertType = {
  type: typeof REMOVE_ALERT;
  payload: {
    id: string;
  };
};

export type AppActionTypes = SetAlertType | RemoveAlertType;
