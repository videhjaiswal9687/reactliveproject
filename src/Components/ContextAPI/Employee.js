import React, { Component } from 'react'
import Department from './Department'

export default class Employee extends Component {
  render() {
    return (
      <div>
          <h1>Employee Component</h1>
          {/* <Department salary={this.props.salary1}/> */}
          <Department />
      </div>
    )
  }
}
