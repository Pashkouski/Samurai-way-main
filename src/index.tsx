import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import App from './App'
import { RootStateType, store } from './redux/state'

const renderApp = (state: RootStateType) => {
	ReactDOM.render(
		<App
			messagesPage={state.messagesPage}
			profilePage={state.profilePage}
			dispatch={store.dispatch.bind(store)}
			// addMessage={store.addMessage.bind(store)}
			// updateNewPostText={store.updateNewPostText.bind(store)}
			// addNewMessage={store.addNewMessage.bind(store)}
		/>,
		document.getElementById('root')
	)
}

renderApp(store.getState())
store.subscribe(renderApp)
