import React, { Component } from 'react'
import { connect } from 'react-redux'
import { customerLogin } from './Action'
import { Form, Button } from 'react-bootstrap'
class CustomerLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.getCustomerLogin(this.state.email, this.state.password)
  }
  render() {
    return (
      <div>
        <h1>CustomerLogin</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    users: state.user.users,
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCustomerLogin: (email, password) => dispatch(customerLogin(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerLogin)