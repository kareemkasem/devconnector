import { ProfileType } from "../../global.types";
import {
  AppActionTypes,
  CLEAR_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
} from "../actions/action.types";

const initialState: ProfileState = {
  profile: null,
  profiles: [],
  repos: [],
  error: {},
  loading: true,
};

const profileReducer = (
  state: ProfileState = initialState,
  action: AppActionTypes
): ProfileState => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default profileReducer;

export interface ProfileState {
  profile: ProfileType | null;
  profiles: ProfileType[];
  repos: any;
  loading: boolean;
  error: { status: string; statusText: string } | {};
}
