import React, { Component } from 'react'

/*
Destructuring was introduced in ES6. It's a Javascript feacture that allows us to extract
multiple pieces of data from an array or object and assign them to their own variables.
*/


export default class Test extends Component {
    state = {
        age: 20,
        address: "Indore M.P",
        gender: "Male",
        dob: "12May1990"
    }
    render() {

        //Destructuring of props
        const { stud_name, stud_rollno, stud_course, stud_fees } = this.props.student

        //Destructuring of state
        const { age, address, gender, dob } = this.state

        return (
            <div>
                <h1>Test</h1>
                {/* <h1>Name:{this.props.student.stud_name}</h1> */}
                <h1>Name:{stud_name}</h1>
                <h1>Rollno:{stud_rollno}</h1>
                <h1>Course:{stud_course}</h1>
                <h1>Fees:{stud_fees}</h1><hr></hr>
                <h1>Age:{age}</h1>
                <h1>Address:{address}</h1>
                <h1>Gender:{gender}</h1>
                <h1>DOB:{dob}</h1>
            </div>
        )
    }
}
