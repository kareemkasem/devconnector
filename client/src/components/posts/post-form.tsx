import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../store/actions/posts";
import { PostType, UserType } from "../../global.types";
import { AppState } from "../../store/configureStore";

const PostForm = ({ addPost, currentUser }: PostFormProps) => {
  const [content, setContent] = useState<string>("");
  const { avatar, name, id } = currentUser;

  return (
    <div className="post-form">
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault();
          addPost({
            user: id,
            username: name,
            avatar,
            content,
            comments: [],
            likes: [],
            date: new Date(),
          });
          setContent("");
        }}
      >
        <textarea
          name="text"
          cols={30}
          rows={5}
          placeholder="Create a post"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-primary my-1" value="Submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentUser: state.auth.user!,
});

export default connect(mapStateToProps, { addPost })(PostForm);

interface PostFormProps {
  addPost: (post: PostType) => void;
  currentUser: UserType;
}
