import * as action_types from "../actions/actionTypes";

const initial_loading_state = {

}

const loading_reducer = (state=initial_loading_state, action) => {
    switch (action.type) {
        case action_types.SET_LOADING_FLAG:
            return Object.assign({}, state, {
                // set some flag here
            })
        default:
            return state
    }
}


export default loading_reducer