import Router from 'next/router'
import axios from 'axios'
import * as actionTypes from '../types'

import { toast } from 'react-toastify'

export const SignUpAuthAction = (userData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('/signup', userData)

            dispatch({ type: actionTypes.SIGNUP_SUCCESS, payload: data })

            toast.success(data.msg)
            
            Router.push('/enter')
        } catch (err) {
            dispatch({ type: actionTypes.SIGNUP_FAIL, payload: err.response.data })
            toast.error(err.response.data.msg)
        }
    }
}

export const SignInAuthAction = (userData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('/signin', userData, { withCredentials: true })

            localStorage.setItem('token', JSON.stringify(data.token))

            dispatch({ type: actionTypes.SIGNIN_SUCCESS, payload: data })

            toast.success(data.msg)

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

            dispatch(getUser())

            Router.push('/')
        } catch (err) {
            dispatch({ type: actionTypes.SIGNIN_FAIL, payload: err.response.data })
            toast.error(err.response.data.msg)
        }
    }
}

export const SignOutAuthAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/signout', { withCredentials: true })

            localStorage.removeItem('token')

            dispatch({ type: actionTypes.SIGNOUT_SUCCESS, payload: data })
            
            toast.success(data.msg)
        } catch (err) {
            dispatch({ type: actionTypes.SIGNOUT_FAIL, payload: err.response.data })
            toast.error(err.response.data.msg)
        };
    }
}

export const getUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/info')

            dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: data })
        } catch (err) {
            dispatch({ type: actionTypes.GET_USER_FAIL, payload: err.response.data })
        }
    }
}

export const getToken = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/token', { withCredentials: true })

            localStorage.setItem('token', JSON.stringify(data.token))

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

            dispatch({ type: actionTypes.GET_TOKEN_SUCCESS, payload: data })
            dispatch(getUser())
        } catch (err) {
            dispatch({ type: actionTypes.GET_TOKEN_FAIL, payload: err.response.data })
        }
    }
}