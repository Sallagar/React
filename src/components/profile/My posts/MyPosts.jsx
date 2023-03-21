import React from "react"
import MyPost from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post name="Ivan K" key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost()
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={MyPost.main}>
      <div className={MyPost.posts}>
        <h4>My posts</h4>
      </div>
      <div className={MyPost.addPost}>
        <div className={MyPost.textarea}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
            placeholder="Enter text for post"
          />
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={MyPost.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts