import React, { Component } from 'react'

export default class Child1 extends Component {

    sendAddrToParent = addr => {
        this.props.callBack(addr)
    }

    render() {
        return (
            <div>
                <h1>Child1 Component</h1>
                <button onClick={()=> this.sendAddrToParent("Indore M.P")}>
                    <h1>SetAddress</h1>
                </button>
                <button onClick={()=> this.props.callBack("Ujjain M.P")}>
                    <h1>UpdateAddress</h1>
                </button>
            </div>
        )
    }
}
