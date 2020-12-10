import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteComment } from "../../store/actions/posts";
import { AppState } from "../../store/configureStore";
import moment from "moment";
import { CommentType } from "../../global.types";

function CommentItem({
  postId,
  comment: { _id, content, username, avatar, user, date },
  authLoading,
  userId,
  deleteComment,
}: CommentItemProps) {
  const deleteCommentHandler = () => {
    const confirmation = window.confirm(
      "are you sure you want to delete this comment ?"
    );
    if (confirmation) deleteComment(_id!, postId);
  };
  return (
    <div className="comment">
      <Link to={`/profile/${user}`} className="comment-top">
        <img className="round-img" src={avatar} alt="" />
        <h4>{username}</h4>
      </Link>
      <div className="comment-meta">
        <p>{moment(date).format("MMM DD YYYY")}</p>
        {!authLoading && user === userId && (
          <p className="comment-delete" onClick={deleteCommentHandler}>
            <i className="fa fa-trash"></i>
          </p>
        )}
      </div>
      <p className="comment-content">{content}</p>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  authLoadin: state.auth.loading,
  userId: state.auth.user!.id,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);

interface CommentItemProps {
  postId: string;
  comment: CommentType;
  authLoading?: boolean;
  userId: string;
  deleteComment: (commentId: string, postId: string) => void;
}
