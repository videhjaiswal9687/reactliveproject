//Single Reducer
// import {reducer} from './Reducer'
// import {createStore} from 'redux'

// const Store = createStore(reducer)
// export default Store

//Combine Reducer
import {reducerPainKiller,reducerParacetamol} from './Reducer'
import {createStore,combineReducers,applyMiddleware} from 'redux'
//npm install redux-logger
import logger from 'redux-logger'

//combine reducers
const reducer = combineReducers({
    painkiller:reducerPainKiller,
    paracetamol:reducerParacetamol
})
const Store = createStore(reducer,applyMiddleware(logger))
export default Store