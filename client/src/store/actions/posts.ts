import { Dispatch } from "redux";
import axiosInstance from "../../axios.config";
import { PostType } from "../../global.types";
import alertError from "../../utils/redux-alert-errors";
import {
  GET_POSTS,
  POST_ERROR,
  GetPostsType,
  PostErrorType,
  UpdateLikesType,
  UPDATE_LIKES,
  DeletePostType,
  DELETE_POST,
  SetAlertType,
  AddPostType,
  ADD_POST,
  GetPostType,
  GET_POST,
} from "./action.types";
import { setAlert } from "./alerts";

export const getPosts = () => async (
  dispatch: Dispatch<GetPostsType | PostErrorType>
) => {
  try {
    const response = await axiosInstance.get<PostType[]>("/api/post/all");
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

export const getPost = (postId: string) => async (
  dispatch: Dispatch<GetPostType | PostErrorType>
) => {
  try {
    const response = await axiosInstance.get<PostType>(`/api/post/${postId}`);
    dispatch({ type: GET_POST, payload: response.data });
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

export const likeOrUnlike = (postId: string) => async (
  dispatch: Dispatch<UpdateLikesType | PostErrorType>
) => {
  try {
    const response = await axiosInstance.put<string[]>(
      `/api/post/like/${postId}`
    );
    dispatch({ type: UPDATE_LIKES, payload: { postId, likes: response.data } });
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

export const deletePost = (postId: string) => async (
  dispatch: Dispatch<DeletePostType | PostErrorType | SetAlertType>
) => {
  try {
    await axiosInstance.delete(`/api/post/delete/${postId}`);

    dispatch(setAlert("post deleted successfully", "success"));
    dispatch({ type: DELETE_POST, payload: postId });
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

export const addPost = (post: PostType) => async (
  dispatch: Dispatch<AddPostType | SetAlertType>
) => {
  try {
    const response = await axiosInstance.post<PostType>(
      "/api/post/create",
      post
    );

    dispatch({ type: ADD_POST, payload: response.data });
  } catch (error) {
    alertError(error);
  }
};
