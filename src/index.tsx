import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./redux/state"
import state from "./redux/state";


ReactDOM.render(
    <App messagesPage={state.messagesPage} profilePage={state.profilePage}/>,
  document.getElementById('root')
);



