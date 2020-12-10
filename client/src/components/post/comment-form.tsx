import React, { useState } from "react";
import { connect } from "react-redux";
import { CommentType, UserType } from "../../global.types";
import { addComment } from "../../store/actions/posts";
import { AppState } from "../../store/configureStore";

function CommentForm({ postId, addComment, currentUser }: CommentFormProps) {
  const [content, setContent] = useState<string>("");

  const { id, avatar, name } = currentUser;
  const comment: CommentType = {
    user: id,
    avatar,
    date: new Date(),
    content,
    username: name,
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3 style={{ textAlign: "center" }}>Comment Section</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault();
          addComment(comment, postId);
          setContent("");
        }}
      >
        <textarea
          name="text"
          cols={30}
          rows={5}
          placeholder="wtite a comment"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  currentUser: state.auth.user!,
});

export default connect(mapStateToProps, { addComment })(CommentForm);

interface CommentFormProps {
  postId: string;
  addComment: (comment: CommentType, postId: string) => void;
  currentUser: UserType;
}
