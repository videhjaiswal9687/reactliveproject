/*

In Function Component we can not use life cycle methods and can not create state. so we need use
useState to create State and useEffect method which is called like

1.)componentDidMount()
2.)componentDidUpdate()
3.)componentWillUnMount()

useState:- It is a hook that allows us to add react state to function component, we call it inside a
function component to add some local state to it.

Syntax:- useState returns a pair:- current state value and a function to update it.

*/

import React, { useState, useEffect } from "react";

export const HookDemo = () => {
    //create  state
    const [count1, setCount1] = useState(10)
    const [count2, setCount2] = useState(20)
    const [show, setShow] = useState(true)

    //useEffect
    //call only one time
    // useEffect(()=>{
    //     console.log("Calling useEffect!!!",count1)
    // },[])

    //call for a particular state
    // useEffect(()=>{
    //     console.log("Calling useEffect!!!",count1,count2)
    // },[count1,count2])

    useEffect(()=>{
        console.log("Calling useEffect!!!",count1,count2)
    })

    const delChild = ()=>{
        setShow(false)
    }

    return (
        <div>
            <h1>HookDemo</h1>
            <h1>Count1:{count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}><h1>Upate count1</h1></button>
            <h1>Count2:{count2}</h1>
            <button onClick={() => setCount2(count2 + 1)}><h1>Upate count2</h1></button>
            {show ? <ChildComponent/>:<h1>Component has been removed</h1>}
            <button onClick={delChild}><h1>Delete</h1></button>
        </div>
    )
}

function ChildComponent(){
    return (
        <>
        <h1>childComponent</h1>
        </>
    )
}

export default HookDemo;







