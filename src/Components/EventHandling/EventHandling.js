import React, { Component } from 'react'

export default class EventHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShow: true,
            user_name: "",
            user_age: 0,
            user_address: "",
            emp_name: "",
            emp_id: 0,
            emp_salary: 0.0
        }
        // this.showHideContent = this.showHideContent.bind(this)
    }

    showHideContent() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    userDetails(name, age, address) {
        console.log(name, age, address)
        this.setState({
            user_name: name,
            user_age: age,
            user_address: address
        })
    }

    empDetails = (name, id, salary) => {
        console.log(name, id, salary)
        this.setState({
            emp_name: name,
            emp_id: id,
            emp_salary: salary
        })
    }

    render() {
        return (
            <div>
                <h1>EventHandling</h1>
                <button onClick={this.showHideContent.bind(this)}>
                    {this.state.isShow ? <h1>Hide</h1> : <h1>Show</h1>}
                </button>
                {this.state.isShow ? <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div> : null}
                <button onClick={() => this.userDetails("Rahul Sharma", 102, 25000.0)}>
                    <h1>userDetails</h1>
                </button>
                {/* <button onClick={this.userDetails.bind(this,"Priya Sharma",22,"Indore M.P")}>
                    <h1>userDetails</h1>
                </button> */}
                <h1>Name:{this.state.user_name}</h1>
                <h1>Age:{this.state.user_age}</h1>
                <h1>Address:{this.state.user_address}</h1>
                <button onClick={() => this.empDetails("Neha Sharma", 101, 23000.0)}>
                    <h1>empDetails</h1>
                </button>
                <h1>Name:{this.state.emp_name}</h1>
                <h1>Id:{this.state.emp_id}</h1>
                <h1>Salary:{this.state.emp_salary}</h1>

            </div>
        )
    }
}
