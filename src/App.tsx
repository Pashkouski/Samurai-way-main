import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {MessagesPageType} from "./redux/state";


function App(props: MessagesPageType) {
    return (
        <BrowserRouter>
            <div className='appWrapper'>

                <Header/>
                <Navbar/>

                <div className='appWrapperContent'>

                    <Route path="/messages" render={() => <Messages dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );

}


export default App;
