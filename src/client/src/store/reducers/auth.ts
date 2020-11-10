import {
  AppActionTypes,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from "../actions/action.types";
import { UserType } from "../types";

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
        isAuthenticated: false,
        loading: false,
        user: action.payload,
      } as authState;

    case SIGNUP_SUCCESS:
      const token = action.payload.token;
      console.log(token);
      localStorage.setItem("token", token);
      return {
        ...state,
        token,
        loading: false,
      } as authState;

    case SIGNUP_FAIL:
    case AUTH_ERROR:
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
