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

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  loading: false,
};

const authReducer = (
  state: AuthState = initialState,
  action: AppActionTypes
) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      } as AuthState;

    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      const token = action.payload.token;
      localStorage.setItem("token", token);
      return {
        ...state,
        token,
        loading: false,
      } as AuthState;

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
      } as AuthState;
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