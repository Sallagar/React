import { getAuthUserData } from "./auth-reduser";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


const initialState = {
    initialized: false,
    email: null,
    login: null,
    isAuth: false
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
      case INITIALIZED_SUCCESS:
        return {
          ...state,
          initialized: true
        };
        
      default:
        return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
 let promise = dispatch(getAuthUserData())
  Promise.all ([promise])
    .then(() => {
      dispatch(initializedSuccess())
    }
  )
}



export default appReduser