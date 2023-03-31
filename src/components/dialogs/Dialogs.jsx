import React from "react"
import dialogs from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogsItem'
import Message from './message/Message';



const Dialogs = (props) => {
  const state = props.dialogsPage

  const dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  const messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const newMessageBody = state.newMessageBody
  
  const onSendMessageClick = () => {
    props.sendMessage()
  }

  const onNewMessageChange = (e) => {
    const body = e.target.value
    props.updateNewMessageBody(body)
  }

  
  

  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.users}>{dialogsElements}</div>
      <div className={dialogs.messages}>
        {messagesElements}
        <div className={dialogs.textAndButton}>
          <textarea
           value={newMessageBody}
           onChange={onNewMessageChange}
           placeholder="Enter your message" />
          <button onClick={onSendMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs