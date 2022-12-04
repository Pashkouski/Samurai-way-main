import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./redux/state"
import {addMessage, addPost, RootStateType, updateNewPostText} from "./redux/state";

export const renderApp = (state: RootStateType) => {
    ReactDOM.render(
        <App messagesPage={state.messagesPage}
             profilePage={state.profilePage}
             addPost={addPost}
             addMessage={addMessage}
             updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    )
}

