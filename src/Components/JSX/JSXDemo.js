/*
JSX:-

1.) It allows us to write HTML Code in React.
2.) It allows us to write HTML Elements in Javascript and place them into the DOM.
3.) It converts HTML tags into react elements.
*/

import React from 'react'

//create elements without JSX
const demo = React.createElement('h1', { style: { backgroundColor: 'olive', color: 'white' } },
    "Create React Element Without using JSX"
)

//create element using JSX
const name = "Videh Jaiswal"
const msg = <h1 style={{backgroundColor:'azure',color:'red'}}>Hello,{name}</h1> 

function calculate(x,y){
    if (x>y) {
        return <h1 className='add'>Addition is:{x+y}</h1>
    }else{
        return <h1 className='mul'>Multiplication is:{x*y}</h1>
    }
}

const displayMsg = ()=> alert("Hello Everyone !!")

export const JSXDemo = () => {
    return (
        <React.Fragment>
            <h1>JSXDemo</h1>
            {demo}
            {msg}
            {calculate(32,12)}
            <button onClick={displayMsg}>Click me</button>
        </React.Fragment>
    )
}
