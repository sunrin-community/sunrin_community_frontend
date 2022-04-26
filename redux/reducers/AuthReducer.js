import * as actionTypes from '../types'

const initState = {
    isLoggedIn: false,
    msg: '',
    token: '',
    user: {},
}
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        // signin
        case actionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                msg: action.payload.msg,
                token: action.payload.token,
            }
        case actionTypes.SIGNIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.payload.msg,
                token: ''
            }
        //signup
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                msg: action.payload.msg
            }
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                msg: action.payload.msg
            }
        //signout
        case actionTypes.SIGNOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.payload.msg,
                token: '',
                user: ''
            }
        case actionTypes.SIGNOUT_FAIL:
            return {
                ...state,
                msg: action.payload.msg,
            }
        // get user
        case actionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                msg: action.payload.msg,
                user: action.payload.user
            }
        case actionTypes.GET_USER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.payload.msg,
                user: {},
            }
        // get access token
        case actionTypes.GET_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                msg: action.payload.msg
            }
        case actionTypes.GET_TOKEN_FAIL:
            return {
                ...state,
                token: '',
                msg: action.payload.msg
            }
        default:
            return state
    }
}

export default AuthReducer