import {USER_REQUEST,USER_SUCCESS,USER_ERROR, CUSTOMER_LOGIN} from './Type'

//InitialState
const initialStateUser = {
    loading : false ,
    users : [],
    error : ""
}
const initialStateLogin = {
    loading : false ,
    details : {},
    error : ""
}
//create Reducers
export const loginReducer = (state=initialStateLogin,action) =>{
    switch(action.type)
    {
        case USER_REQUEST: return {
            ...state,
            loading:true
        }
        case CUSTOMER_LOGIN: return {
            ...state,
            loading:false,
            details:action.payload
        }
        case USER_ERROR: return {
            ...state,
            loading:false,
            error:action.error
        }
        default : return state
    }
}

export const userReducer = (state=initialStateUser,action) =>{
    switch(action.type)
    {
        case USER_REQUEST: return {
            ...state,
            loading:true
        }
        case USER_SUCCESS: return {
            ...state,
            loading:false,
            users:action.payload
        }
        case USER_ERROR: return {
            ...state,
            loading:false,
            error:action.error
        }
        default : return state
    }
}
