import AxiosConfig from "../../axios.config";
import { GET_PROFILE, PROFILE_ERROR } from "./action.types";
import { GetProfile, ProfileError } from "./action.types";
import { Dispatch } from "redux";
import { ProfileType } from "../../global.types";
import { AxiosResponse } from "axios";

export const getCurrentUserProfile = () => async (
  dispatch: Dispatch<GetProfile | ProfileError>
) => {
  try {
    const axiosRequest = new AxiosConfig().instance;
    const response = await axiosRequest.get<null, AxiosResponse<ProfileType>>(
      "/api/profile/me"
    );
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    } as GetProfile);
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        status: error.response.status,
        statusText: error.response.statusText,
      },
    } as ProfileError);
  }
};
