import { CallHistoryMethodAction } from "connected-react-router";
import {
  AlertType,
  githubRepo,
  ProfileType,
  UserType,
} from "../../global.types";

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const CLEAR_ALERTS = "CLEAR_ALERTS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_BY_ID = "GET_PROFILE_BY_ID";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const CLEAR_PROFILES = "CLEAR_PROFILES";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_PROFILE_FAILED = "UPDATE_PROFILE_FAILED";
export const DELETE_ACCOUT = "DELETE_ACCOUNT";
export const GET_GITHUB_REPOS = "GET_GITHUB_REPOS";

export interface SetAlertType {
  type: typeof SET_ALERT;
  payload: AlertType;
}
export interface RemoveAlertType {
  type: typeof REMOVE_ALERT;
  payload: {
    id: string;
  };
}
export interface clearAlertsType {
  type: typeof CLEAR_ALERTS;
}
export interface SignupSuccessType {
  type: typeof SIGNUP_SUCCESS;
  payload: {
    token: string;
  };
}
export interface SignupFailType {
  type: typeof SIGNUP_FAIL;
}
export interface UserLoadedType {
  type: typeof USER_LOADED;
  payload: UserType;
}
export interface AuthErrorType {
  type: typeof AUTH_ERROR;
}
export interface LoginSuccessType {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
  };
}
export interface LoginFailType {
  type: typeof LOGIN_FAIL;
}
export interface LogoutType {
  type: typeof LOGOUT;
}
export interface GetProfileType {
  type: typeof GET_PROFILE;
  payload: ProfileType;
}
export interface GetProfileByIdType {
  type: typeof GET_PROFILE_BY_ID;
  payload: ProfileType;
}
export interface GetAllProfilesType {
  type: typeof GET_ALL_PROFILES;
  payload: ProfileType[];
}
export interface ProfileErrorType {
  type: typeof PROFILE_ERROR;
  payload: { status: string; statusText: string };
}
export interface ClearProfileType {
  type: typeof CLEAR_PROFILE;
}
export interface ClearProfilesType {
  type: typeof CLEAR_PROFILES;
}
export interface UpdateProfileType {
  type: typeof UPDATE_PROFILE;
  payload: ProfileType;
}
export interface UpdateProfileFailedType {
  type: typeof UPDATE_PROFILE_FAILED;
}
export interface DeleteAccountType {
  type: typeof DELETE_ACCOUT;
}
export interface GetGithubReposType {
  type: typeof GET_GITHUB_REPOS;
  payload: githubRepo[];
}

export type AppActionTypes =
  | CallHistoryMethodAction //for router bindings
  | SetAlertType
  | RemoveAlertType
  | clearAlertsType
  | SignupSuccessType
  | SignupFailType
  | UserLoadedType
  | AuthErrorType
  | LoginSuccessType
  | LoginFailType
  | LogoutType
  | GetProfileType
  | GetProfileByIdType
  | GetAllProfilesType
  | ProfileErrorType
  | ClearProfileType
  | ClearProfilesType
  | UpdateProfileType
  | UpdateProfileFailedType
  | DeleteAccountType
  | GetGithubReposType;
