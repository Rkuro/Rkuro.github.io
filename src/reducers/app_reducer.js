/*
This is the main reducer for the app.
 */
import { combineReducers } from 'redux'
import loadingReducer from './loading'


const app_reducer = combineReducers({
    loadingReducer,
})

export default app_reducer