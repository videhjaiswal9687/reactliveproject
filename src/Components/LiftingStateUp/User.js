import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>User Component</h1>
                <h1>Name:{this.props.name}</h1>
                <button onClick={() => this.props.callBackName("Neha Sharma")} >
                    <h1>ChangeName</h1>
                </button>
            </div>
        )
    }
}
