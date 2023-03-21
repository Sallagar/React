const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      }
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 5, message: body }]
      }
    default:
      return state;
  }
}
export const sendMessageCreator  = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer