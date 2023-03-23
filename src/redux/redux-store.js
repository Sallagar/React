import {combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReduser from './sidebar-reduser';
import usersReduser from './users-reducer';
import authReduser from './auth-reduser';

const reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
})

const store = createStore(reducers)

export default store