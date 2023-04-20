import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReduser from './sidebar-reduser';
import usersReduser from './users-reducer';
import authReduser from './auth-reduser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'



const reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
   
})

const store = createStore(reducers, applyMiddleware (thunkMiddleware))

window.store = store

export default store