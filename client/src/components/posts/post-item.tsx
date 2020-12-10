import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../../store/configureStore";
import { PostType, UserType } from "../../global.types";
import moment from "moment";
import { likeOrUnlike, deletePost } from "../../store/actions/posts";

function PostItem({
  authLoading,
  currentUser,
  post: { _id, content, username, avatar, user, likes, comments, date },
  likeOrUnlike,
  deletePost,
}: PostProps) {
  return (
    <div className="post p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{username}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{content}</p>
        <p className="post-date">
          Posted on {moment(date).format("DD MM YYYY")}
        </p>

        <button
          onClick={() => likeOrUnlike(_id!)}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-up" />{" "}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <Link to={`/posts/${_id}`} className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!authLoading && user === currentUser.id && (
          <button
            onClick={() => deletePost(_id!)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  authLoading: state.auth.loading,
  currentUser: state.auth.user!,
});

export default connect(mapStateToProps, { likeOrUnlike, deletePost })(PostItem);

interface PostProps {
  authLoading: boolean;
  currentUser: UserType;
  post: PostType;
  likeOrUnlike: (postId: string) => void;
  deletePost: (postId: string) => void;
}
