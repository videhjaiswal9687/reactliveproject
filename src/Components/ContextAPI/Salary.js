import React, { Component } from 'react'

// const MyContext=React.createContext()
import { Consumer } from './ContextAPI'

import { MyContext } from './Demo'
export default class Salary extends Component {
    render() {
        return (
            <div>
                <h1>Salary Component</h1>
                {/* <h1>Rs:{this.props.getsalary}</h1> */}
                {/* <MyContext.Consumer>
                    {data => <h1>Salary is:{data}</h1>}
                </MyContext.Consumer> */}

                {/* <MyContext.Consumer>
                    {({salary,clickChange})=> 
                    <div>
                        <h1>Salary is:{salary}</h1>
                        <button onClick={clickChange}>UpdateSalary</button>
                    </div>
                    }
                </MyContext.Consumer> */}

                <Consumer>
                    {({salary,clickChange})=> 
                    <div>
                        <h1>Salary is:{salary}</h1>
                        <button onClick={clickChange}>UpdateSalary</button>
                    </div>
                    }
                </Consumer>
            </div>
        )
    }
}
