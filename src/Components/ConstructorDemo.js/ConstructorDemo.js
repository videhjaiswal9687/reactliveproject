/*

Constructor is a method used to initialze an object's state in a class.It will called automatically
during the creation of an object in a class.

1.)It is used for initializing local state of the component by assigning an object to this.state.
2.)We need to call super(props) method before write any other statement, if we do not call, then 
this.props will be undefined in the constructor.
3.)It is used for binding event handler methods that occur in our component.
4.)If we want to update the state, we have to call this.setState() method.

The key difference between props and state is that state is internal and controlled by the component 
itself while props are external and controlled by whatever renders the component.
*/
import React from "react";
export default class Person extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 25,
            name: this.props.name
        }
        this.handleAge = this.handleAge.bind(this)
    }
    //if you want previous value don't use this
    // updateAge = () => {
    //     console.log(this)
    //     this.setState({
    //         age: this.state.age + 1
    //     })
    // }

    // updateAge = () => {
    //     console.log(this)
    //     this.setState(function(state,props){
    //         return {
    //             age:state.age + 1
    //         }
    //     })
    // }

    updateAge = () => {
        // console.log(this)
        this.setState((state, props) =>(
            {
             age: state.age + 1,
             name: state.name + " Sharma"
        })
        )
    }


    handleAge() {
        // console.log(this)
        this.updateAge()
        this.updateAge()
        this.updateAge()
    }

    render() {
        return (
            <>
                <h1>Constructor Demo</h1>
                <h1>Name:{this.state.name}</h1>
                <h1>Age:{this.state.age}</h1>
                <button onClick={this.handleAge}>Update1</button>
                {/* <button onClick={this.updateAge}>Update2</button> */}
            </>
        )
    }
} 