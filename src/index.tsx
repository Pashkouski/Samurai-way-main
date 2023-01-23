import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import App from './App'
import {RootStateType} from "./redux/store";
import { store }  from './redux/redux-store'


const renderApp = (state: RootStateType) => {
	debugger
	ReactDOM.render(
		<App
			messagesPage={state.messagesPage}
			profilePage={state.profilePage}
			dispatch={store.dispatch.bind(store)}
		/>,
		document.getElementById('root')
	)
}

renderApp(store.getState())
store.subscribe(() => {
	let state = store.getState()
	renderApp(state)
})
