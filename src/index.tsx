import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./redux/state"
import state, {addPost} from "./redux/state";


    ReactDOM.render(
        <App messagesPage={state.messagesPage} profilePage={state.profilePage} addPost={addPost}/>,
        document.getElementById('root')
    )

