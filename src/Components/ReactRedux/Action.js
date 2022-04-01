import {buyPainKiller,buyParacetamol} from './Type'

//create Actions
const action1 = {
    type:buyParacetamol
}
const action2 = {
    type:buyPainKiller
}

//action creator: wrapping action in a single function
export function buy_Paracetamol(){
    return action1
}

export function buy_PainKiller(){
    return action2
}