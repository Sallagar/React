import React from "react"
import dialogs from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogsItem'
import Message from './message/Message';
import {Field, reduxForm} from "redux-form";



const Dialogs = (props) => {
  const state = props.dialogsPage

  const dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  const messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
    
  
  return (
        <div className={dialogs.dialogs}>
      <div className={dialogs.users}>{dialogsElements}</div>
      <div className={dialogs.messages}>
        {messagesElements}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
}


const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Enter your message'}  
        name={'newMessageBody'}
        component={'textarea'} />
      </div> 
      <div>
        <button>Send message</button>
      </div> 
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (addMessageForm)

export default Dialogs