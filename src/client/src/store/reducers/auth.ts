import { AppActionTypes, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../actions/action.types";
import { UserType } from "../types";

const initialState: authState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  loading: false,
};

const authReducer = (state: authState = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      const { token } = action.payload;
      localStorage.setItem("token", token);
      return {
        token,
        isAuthenticated: true,
        loading: false,
        user: null,
      } as authState;

    case SIGNUP_FAIL:
      localStorage.removeItem("token");
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
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
