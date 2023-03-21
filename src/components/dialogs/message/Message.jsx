import React from "react"
import dialogs from './../Dialogs.module.css';



const Message = (props) => {

 
  return (
    <div className={dialogs.d}>
      <div className={dialogs.message}>{props.message}</div>
    </div>
  );
}


export default Message

