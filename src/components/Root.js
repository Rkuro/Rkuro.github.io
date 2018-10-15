/*
Root of the app, controls routing with react-router-dom
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import Comp_404 from '../containers/404'

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="*" component={Comp_404}/>
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store:PropTypes.object.isRequired
}


export default Root