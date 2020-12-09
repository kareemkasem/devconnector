import { ClientErrorType } from "../../global.types";
import { AppActionTypes, GET_POSTS, POST_ERROR } from "../actions/action.types";

const initialState: PostsState = {
  post: "",
  posts: [],
  loading: true,
  error: {},
};

const postsReducer = (
  state: PostsState = initialState,
  action: AppActionTypes
): PostsState => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: false, posts: action.payload };

    case POST_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default postsReducer;

export interface PostsState {
  post: string;
  posts: string[];
  loading: boolean;
  error: ClientErrorType | {};
}
