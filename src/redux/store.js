import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReduser from "./sidebar-reduser";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 3 },
        { id: 2, message: "My first post", likesCount: 23 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Maxim" },
        { id: 3, name: "Olya" },
        { id: 4, name: "Ksenia" },
        { id: 5, name: "Alexandr" },
      ],
      messagesData: [
        { id: 1, message: "Hey!" },
        { id: 2, message: "Yo!" },
        { id: 3, message: "How're u?" },
        { id: 4, message: "Good1" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};


export default store
window.store = store