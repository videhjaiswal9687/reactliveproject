import React, { Component } from 'react'
import Salary from './Salary'

export default class Department extends Component {
  render() {
    return (
      <div>
          <h1>Department Component</h1>
          {/* <Salary getsalary={this.props.salary}/> */}
          <Salary />
      </div>
    )
  }
}
