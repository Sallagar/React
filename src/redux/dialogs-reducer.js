const SEND_MESSAGE = 'SEND-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 5, message: body }]
      }
    default:
      return state;
  }
}
export const sendMessageCreator  = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer