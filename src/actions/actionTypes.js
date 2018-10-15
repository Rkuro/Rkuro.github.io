/*
This Module contains all the types for possible actions and their action creators
 */

/*

Action Types

 */
export const SET_LOADING_FLAG = 'SET_LOADING_FLAG'


/*

Action Creators

 */
export const setLoading = (flag) => {
    return {type:SET_LOADING_FLAG, flag}
}