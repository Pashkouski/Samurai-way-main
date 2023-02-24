import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from 'react-router-dom'
import MessagesPropsContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <HeaderContainer />
                <Navbar/>

                <div className='appWrapperContent'>
                    <Route
                        path='/messages'
                        render={() => (
                            <MessagesPropsContainer

                            />
                        )}
                    />

                    <Route
                        path='/profile/:userID?'
                        render={() => (
                            <ProfileContainer

                            />
                        )}
                    />
                    <Route
                        path='/users'
                        render={() => (
                            <UsersContainer

                            />
                        )}
                    />

                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
