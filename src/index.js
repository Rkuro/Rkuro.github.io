/*
Root of the App
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Root from './components/Root'
import logger from 'redux-logger'
import app_reducer from './reducers/app_reducer'


const store = createStore(
    app_reducer,
    applyMiddleware(logger)
)


render(
    <Root store={store}/>,
    document.getElementById('root')
)