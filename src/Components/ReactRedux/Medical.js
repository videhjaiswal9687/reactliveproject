import React, { Component } from 'react'
//The connect() function connects a React component to a Redux store.
import {connect} from 'react-redux'
import {buy_PainKiller,buy_Paracetamol} from './Action'
class Medical extends Component {
    render() {
        return (
            <div>
                <h1>Medical</h1>
                <h1>Number of Paracetamol:{this.props.buyParacetamol}</h1>
                <button onClick={this.props.getParacetamol}><h1>BuyParacetamol</h1></button>
                <h1>Number of PainKiller:{this.props.buyPainKiller}</h1>
                <button onClick={this.props.getPainKiller}><h1>BuyPainKiller</h1></button><hr></hr>
            </div>
        )
    }
}
//Single Reducer
// const mapStateToProps = state =>{
//     return {
//         buyParacetamol:state.buyParacetamol,
//         buyPainKiller:state.buyPainKiller
//     }
// }

//combine Reducer
const mapStateToProps = state =>{
    return {
        buyParacetamol:state.paracetamol.buyParacetamol,
        buyPainKiller:state.painkiller.buyPainKiller
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getParacetamol: ()=> dispatch(buy_Paracetamol()),
        getPainKiller: ()=> dispatch(buy_PainKiller())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Medical)