import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'


const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_DATA:
        return {
          ...state,
          ...action.data,
          isAuth: true
        };
        
      default:
        return state;
    }
}

const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.getMe()
      .then(response => { 
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data
          dispatch(setAuthUserData(id, email, login))
        }
    });
}

export default authReduser