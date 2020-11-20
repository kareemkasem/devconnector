import axiosInstance from "../../axios.config";
import { GET_PROFILE, PROFILE_ERROR } from "./action.types";
import { GetProfileType, ProfileErrorType } from "./action.types";
import { Dispatch } from "redux";
import { ProfileType } from "../../global.types";
import { AxiosResponse } from "axios";

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

export const createOrUpdateProfile = (
  formData: ProfileType,
  edit: boolean = false
) => async (dispatch: Dispatch<any>) => {
  const res = await axiosInstance().post("/api/profile", formData);
  /******************************************************************
   * need to start working on this thing
   ******************************************************************/
};
