import axiosInstance from "../../axios.config";
import {
  deleteAccountType,
  DELETE_ACCOUT,
  GET_PROFILE,
  PROFILE_ERROR,
  SetAlertType,
  updateProfileFailedType,
  updateProfileType,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILED,
} from "./action.types";
import { GetProfileType, ProfileErrorType } from "./action.types";
import { Dispatch } from "redux";
import { ExtendedProfileType, ProfileType } from "../../global.types";
import { AxiosResponse } from "axios";
import alertError from "../../utils/redux-alert-errors";

export const getCurrentUserProfile = () => async (
  dispatch: Dispatch<GetProfileType | ProfileErrorType>
) => {
  try {
    const response = await axiosInstance().get<
      null,
      AxiosResponse<ProfileType>
    >("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    } as GetProfileType);
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        status: error.response.status,
        statusText: error.response.statusText,
      },
    } as ProfileErrorType);
  }
};

export const createOrUpdateProfile = (data: ProfileType) => async (
  dispatch: Dispatch<updateProfileType | updateProfileFailedType | SetAlertType>
) => {
  try {
    const result = await axiosInstance().post<
      any,
      AxiosResponse<ExtendedProfileType>
    >("/api/profile", data);
    const { user, ...profileData } = result.data;
    dispatch({
      type: UPDATE_PROFILE,
      payload: profileData,
    });
  } catch (error) {
    alertError(error, dispatch);
    dispatch({
      type: UPDATE_PROFILE_FAILED,
    });
  }
};

export const deleteAccount = () => async (
  dispatch: Dispatch<deleteAccountType>
) => {
  try {
    await axiosInstance().delete<any, AxiosResponse>("/api/user/delete");
    dispatch({ type: DELETE_ACCOUT });
  } catch (error) {
    alertError(error, dispatch);
  }
};
