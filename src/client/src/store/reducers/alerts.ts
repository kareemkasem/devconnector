import { AppActionTypes, REMOVE_ALERT, SET_ALERT } from "../actions/action.types";
import { Alert } from "../types";

const initialState: Alert[] = [];

const alertsReducer = (state: Alert[] = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert: Alert) => alert.id !== action.payload.id);
    default:
      return state;
  }
};

export default alertsReducer;
