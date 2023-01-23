import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import App from './App'
import {RootStateType} from "./redux/store";
import {store, StoreReduxType} from './redux/redux-store'


const renderApp = (store: StoreReduxType) => {
    debugger
    ReactDOM.render(
        <App
            store={store}
        />,
        document.getElementById('root')
    )
}

renderApp(store)
store.subscribe(() => {
    renderApp(store)
})
