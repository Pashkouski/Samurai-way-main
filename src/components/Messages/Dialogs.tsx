import React from 'react'
import s from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem'
import Dialog from './Dialog/Dialog'
import {mapDispatchToPropsType, mapStateToPropsType} from "./MessagesContainer";
import {store} from "../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType

interface IMessageType {
    message: string
}

const Dialogs = (props: MessagesPropsType) => {

    let state = store.getState()


    let dialogsElements = state.messagesPage.dialogs.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    ))
    let messagesElement = state.messagesPage.messages.map(m => <Dialog key={m.id} text={m.message}/>)

    // let newMessageElement = React.createRef<HTMLTextAreaElement>()

    /*
        let addMessage = () => {
            props.addMessage()
        }
        let addNewMessage = () => {
            if (newMessageElement.current) {
                let body = newMessageElement.current.value
                props.addNewMessage(body)
            }
        }
    */


    let addNewMessage = (e: any) => {
        // props.addNewMessage(e.newMessageText)
        props.addMessage(e.newMessageText)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElement}
                {/*                <div>
					<textarea
                        ref={newMessageElement}
                        onChange={addNewMessage}
                        value={props.newMessage}
                    ></textarea>
                </div>

                <div>
                    <button onClick={addMessage}>add message</button>
                </div>*/}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs

const AddMessageForm: React.FC<InjectedFormProps<IMessageType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageText'}
                   placeholder={'Enter your message...'}/>
            <button>Add message</button>
        </form>)
}

const AddMessageFormRedux = reduxForm<IMessageType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)