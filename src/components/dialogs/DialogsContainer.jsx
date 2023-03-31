import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
  }
}


const DialogsContainer = withAuthRedirect (connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer