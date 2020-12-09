import React, { useEffect } from "react";
import { connect } from "react-redux";
import PostItem from "./post-item";
import { getPosts } from "../../store/actions/posts";
import { AppState } from "../../store/configureStore";
import { PostType } from "../../global.types";
import { MoonLoader } from "react-spinners";
import {} from "../../store/actions/action.types";

function Posts({ getPosts, posts, postsLoading }: PostsProps) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      {postsLoading ? (
        <div className="loader-page">
          <MoonLoader loading={true} size={100} color="#00A3B8" />;
        </div>
      ) : (
        <div className="posts">
          {posts.map(post => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  posts: state.posts.posts,
  postsLoading: state.posts.loading,
});

export default connect(mapStateToProps, { getPosts })(Posts);

interface PostsProps {
  getPosts: VoidFunction;
  posts: PostType[];
  postsLoading: boolean;
}
