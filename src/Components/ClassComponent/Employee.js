/*
class Component (StateFull Component)
*/
import React, { Component } from "react";
const studStyle = {
    backgroundColor:'teal',
    color:'white',
    borderBottom:'5px solid black',
    textAlign:'center'
}
const facStyle = {
    backgroundColor:'olive',
    color:'white',
    borderBottom:'5px dashed black',
    textAlign:'center'
}
export class Employee extends React.Component 
{
    render(){
        return (
            <div style={facStyle}>
                <h1>EMPLOYEE DETAILS</h1>
                <h1>Name:{this.props.name}</h1>
                <h1>Id:{this.props.id}</h1>
                <h1>Salary:{this.props.salary}</h1>
                <h1>Department:{this.props.department}</h1>
            </div>
        )
    }
}
export class Manager extends Component
{
    render(){
        return(
            <div style={studStyle}>
                <h1>MANAGER DETAILS</h1>
                <h1>Name:{this.props.name}</h1>
                <h1>Exp:{this.props.exp}</h1>
                <h1>Salary:{this.props.salary}</h1>
                <h1>Department:{this.props.department}</h1>
            </div>
        )
    }
}
// export default Employee;