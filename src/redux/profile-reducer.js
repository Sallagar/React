import { userAPI } from './../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 3 },
    { id: 2, message: "My first post", likesCount: 23 },
  ],
  newPostText: "",
  profile: null,
}

 const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST: {
        const newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0,
        };
        return {
          ...state,
          posts: [newPost, ...state.posts],
          newPostText: '',
        }
      }
      case UPDATE_NEW_POST_TEXT: {
        return {
          ...state,
          newPostText: action.newText
        }
      }
      case SET_USER_PROFILE: {
        return {...state, profile: action.profile}
      }
      default: {
        return state;
      }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST,})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId)
  .then(response => { 
      dispatch(setUserProfile(response.data))
  })
}
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text,})

export default profileReducer