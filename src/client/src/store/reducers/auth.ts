import {
  AppActionTypes,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/action.types";
import { UserType } from "../../global.types";

const initialState: authState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  loading: false,
};

const authReducer = (state: authState = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      } as authState;

    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      const token = action.payload.token;
      localStorage.setItem("token", token);
      return {
        ...state,
        token,
        loading: false,
      } as authState;

    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        user: null,
        token: null,
        loading: false,
        isAuthenticated: false,
      } as authState;
    default:
      return state;
  }
};

export default authReducer;

interface authState {
  token: string | null;
  isAuthenticated: boolean;
  user: UserType | null;
  loading: boolean;
}
