import {buyPainKiller,buyParacetamol} from './Type'


//combineReducer
const initialStateParacetamol = {
    buyParacetamol:2341
}
const initialStatePainKiller = {
    buyPainKiller:232
}

//create Reducers
export const reducerParacetamol = (state=initialStateParacetamol,action) =>{
    switch(action.type)
    {
        case buyParacetamol: return {
            ...state,
            buyParacetamol:state.buyParacetamol - 1
        }
        default : return state
    }
}
export const reducerPainKiller = (state=initialStatePainKiller,action) =>{
    switch(action.type)
    {
        case buyPainKiller: return {
            ...state,
            buyPainKiller:state.buyPainKiller - 1
        }
        default : return state
    }
}




//Single Reducer
// //InitialState
// const initialState = {
//     buyParacetamol:1201,
//     buyPainKiller:452
// }

// //create Reducer
// export const reducer = (state=initialState,action) =>{
//     switch(action.type)
//     {
//         case buyParacetamol: return {
//             ...state,
//             buyParacetamol:state.buyParacetamol - 1
//         }
//         case buyPainKiller: return {
//             ...state,
//             buyPainKiller:state.buyPainKiller - 1
//         }
//         default : return state
//     }
// }