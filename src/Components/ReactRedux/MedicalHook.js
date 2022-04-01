import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//useSelector:- Allows you to extract data from the Redux store state
//useDispatch:- This hook returns a reference to the dispatch function from the Redux store
import {buy_PainKiller,buy_Paracetamol} from './Action'

export const MedicalHook = () => {
    
    //Single Reducer
    // const noOfParacetamol = useSelector(state=>state.buyParacetamol)
    // const noOfPainKiller = useSelector(state=>state.buyPainKiller)

    const noOfParacetamol = useSelector(state=>state.paracetamol.buyParacetamol)
    const noOfPainKiller = useSelector(state=>state.painkiller.buyPainKiller)
    
    const dispatch = useDispatch();
    return (
        <div>
            <h1>MedicalHook</h1>
            <h1>Number of Paracetamol:{noOfParacetamol}</h1>
            <button onClick={()=> dispatch(buy_Paracetamol())}><h1>BuyParacetamol</h1></button>
            <h1>Number of PainKiller:{noOfPainKiller}</h1>
            <button onClick={()=> dispatch(buy_PainKiller())}><h1>BuyPainKiller</h1></button>
        </div>
    )
}
