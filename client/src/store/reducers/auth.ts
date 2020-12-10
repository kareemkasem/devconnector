import {
  AppActionTypes,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  DELETE_ACCOUT,
} from "../actions/action.types";
import { UserType } from "../../global.types";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  loading: true,
};

const authReducer = (
  state: AuthState = initialState,
  action: AppActionTypes
): AuthState => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      const token = action.payload.token;
      localStorage.setItem("token", token);
      return {
        ...state,
        token,
        loading: false,
      };

    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
    case DELETE_ACCOUT:
      localStorage.removeItem("token");
      return {
        user: null,
        token: null,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: UserType | null;
  loading: boolean;
}