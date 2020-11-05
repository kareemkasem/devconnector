import { AppActionTypes, REMOVE_ALERT, SET_ALERT } from "../actions/action.types";
import { AlertType } from "../types";

const initialState: AlertType[] = [];

const alertsReducer = (state: AlertType[] = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert: AlertType) => alert.id !== action.payload.id);
    default:
      return state;
  }
};

export default alertsReducer;