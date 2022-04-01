import React, { Component } from 'react'

/*
Class Component's Life Cycle:-
Each Component has several lifecycle methods.These methods are used to mount,update and unmount.
1.) Mounting:- Component is rendered to the DOM for the first time.
2.) Updating:- Re-rendered the component by changes to props and state.
3.) UnMouting:- Component is removed from DOM.


Mounting:-These methods are called in the following order when component inserted into the DOM.
1.) constructor()
2.) static getDerivedStateFromProps
3.) render()
4.) componentDidMount() 

Updating: These methods are called in the following order when component inserted into the DOM.
1.) static getDerivedStateFromProps
2.) shouldComponentUpdate()
3.) render()
4.) getSnapshotBeforeUpdate(prevProps,prevState)
5.) componentDidUpdate()

UnMounting:- Component removed from the DOM
1.) static getDerivedStateFromProps
2.) shouldComponentUpdate()
3.) render()
4.) getSnapshotBeforeUpdate(prevProps,prevState)
5.) componentWillUnMount()
5.) componentDidUpdate()

*/

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product_price: this.props.price,
            show:true
        }
        console.log("Constructor is Calling !!")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Calling getDerivedStateFromProps()!!!")
        return null
    }
    componentDidMount() {
        console.log("Calling componentDidMount!!")
        setTimeout(()=>{
            this.setState({
                product_price:this.state.product_price + 100.0
            })
        },3000)
    }

    shouldComponentUpdate() {
        console.log("Calling shouldComponentUpdate!!")
        return true
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Calling getSnapshotBeforeUpdate!!")
        document.getElementById('data1').innerHTML = "<h1>Before Update,Product Price was in Rs:" + prevState.product_price + "</h1>"
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate!!")
        document.getElementById('data2').innerHTML = "<h1>After Update,Product Price was in Rs:" + this.state.product_price + "</h1>"
    }
    updatePrice =()=>{
        this.setState({
            product_price: this.state.product_price + 200.0
        })
    }
    delComponent = ()=>{
        this.setState({
            show:false
        })
    }

    render() {
        console.log("Calling Rendered Method()!!!")
        return (
            <div>
                <h1>LifeCycleOfClassComponent</h1>
                <h2>ProductPrice in Rs:{this.state.product_price}</h2>
                <h1 id="data1"></h1>
                <h1 id="data2"></h1>
                <button onClick={this.updatePrice}>UpdatePrice</button>
                {this.state.show ? <ChildComponent /> : <h1 style={{backgroundColor:'red',color:'white'}}>
                Component has been removed!!</h1>}
                <button onClick={this.delComponent}>Delete</button>
            </div>
        )
    }
}

class ChildComponent extends Component
{
    componentWillUnmount(){
        console.log("calling componentWillUnMount!!!")
    }
    render(){
        return (
            <>
            <h1 style={{backgroundColor:'teal',color:'white'}}>ChildComponent</h1>
            </>
        )
    }
}