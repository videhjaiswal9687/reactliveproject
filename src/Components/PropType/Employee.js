import React, { Component } from 'react'
import PropTypes from 'prop-types'
/*
npm install prop-types
*/

export default class Employee extends Component {
  render() {
    return (
      <div>
          <h1>Employee Component</h1>
          <h1>Hello Everyone!!!,My Name is: {this.props.name}, my Id:{this.props.id} and
          Salary is:{this.props.salary}
          </h1>
      </div>
    )
  }
}

Employee.propTypes = {
   name:PropTypes.string.isRequired,
   id:PropTypes.number.isRequired,
   salary:PropTypes.number.isRequired
}

//Default props
Employee.defaultProps = {
    name:"Name is not Available",
    id:0,
    salary:0.0
}