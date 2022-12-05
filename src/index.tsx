import React from 'react';
import './index.css';
import state, {addMessage, addPost, RootStateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let renderApp = (state: RootStateType) => {
    ReactDOM.render(
        <App messagesPage={state.messagesPage}
             profilePage={state.profilePage}
             addPost={addPost}
             addMessage={addMessage}
             updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    )
}


renderApp(state);

subscribe(renderApp);