import { USER_REQUEST, USER_SUCCESS, USER_ERROR, CUSTOMER_LOGIN } from './Type'
import axios from 'axios'

function user_request() {
    return {
        type: USER_REQUEST
    }
}

function user_success(users) {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}

function user_error(error) {
    return {
        type: USER_ERROR,
        payload: error
    }
}

const customer_login = (details) => {
    return {
        type: CUSTOMER_LOGIN,
        payload: details
    }
}

//redux thunk functions
export const customerLogin = (email, password) => {
    return function (dispatch) {
        dispatch(user_request)
        let params = {
            email: email,
            password: password
        }
        axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login", params)
            .then((response) => {
                dispatch(customer_login(response.data))
            })
            .catch((error) => {
                dispatch(user_error(error))
            })
    }
}



export const fetchUser = () => {
    return function (dispatch) {
        dispatch(user_request())
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            const getUsers = response.data.map(user => user)
            dispatch(user_success(getUsers))
        })
            .catch((error) => {
                dispatch(user_error(error))
            })
    }
}