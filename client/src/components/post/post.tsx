import React, { useEffect } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PostItem from "../posts/post-item";
import { getPost } from "../../store/actions/posts";
import { MoonLoader } from "react-spinners";
import store, { AppState } from "../../store/configureStore";
import { PostType } from "../../global.types";
import { CLEAR_POST } from "../../store/actions/action.types";

function Post({ getPost, post, postLoading, match }: PostProps) {
  useEffect(() => {
    getPost(match.params.postId);
    return () => {
      store.dispatch({ type: CLEAR_POST });
    };
  }, [getPost, match.params.postId]);

  return postLoading || !post ? (
    <div className="loader-page">
      <MoonLoader loading={true} size={100} color="#00A3B8" />
    </div>
  ) : (
    <div>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showControls={false} />
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  post: state.posts.post,
  postLoading: state.posts.loading,
});

export default withRouter(connect(mapStateToProps, { getPost })(Post));

interface PostProps extends RouteComponentProps<{ postId: string }> {
  getPost: (postId: string) => void;
  post: PostType | undefined;
  postLoading: boolean;
}
