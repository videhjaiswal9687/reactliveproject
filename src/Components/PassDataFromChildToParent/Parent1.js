import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Neha Sharma",
            age: 23,
            address: ""
        }
    }

    handleAddress = getAddr => {
        this.setState({
            address: getAddr
        })
    }

    render() {
        return (
            <div>
                <h1>Parent1 Component</h1>
                <h1>Name:{this.state.name}</h1>
                <h1>Age:{this.state.age}</h1>
                <h1>Address:{this.state.address}</h1>
                <Child1 callBack={this.handleAddress} />
            </div>
        )
    }
}
