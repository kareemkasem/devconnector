import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import axiosInstance from "../../axios.config";
import {
  GET_POSTS,
  POST_ERROR,
  GetPostsType,
  PostErrorType,
} from "./action.types";

export const getPosts = () => async (
  dispatch: Dispatch<GetPostsType | PostErrorType>
) => {
  try {
    const response = await axiosInstance().get<any, AxiosResponse<string[]>>(
      "/api/post/all"
    );
    dispatch({ type: GET_POSTS, payload: response.data });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        status: error.response.status,
        statusText: error.response.statusText,
      },
    });
  }
};
