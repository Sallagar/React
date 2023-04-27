import React from "react"
import MyPost from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post name="Ivan K" key={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  React.createRef();

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  };

  return (
    <div className={MyPost.main}>
      <div className={MyPost.posts}>
        <h4>My posts</h4>
      </div>
      <div className={MyPost.addPost}>
        <AddPostFormRedux onSubmit={onAddPost}/>
      </div>
      <div className={MyPost.post}>{postsElements}</div>
    </div>
  );
};

const addPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div className={MyPost.textarea}>
        <Field placeholder={'Enter text for post'} 
        name={'newPostText'}
        component={'textarea'}/>  
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: 'ProfileAddPostForm'}) (addPostForm)

export default MyPosts