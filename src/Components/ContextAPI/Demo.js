import React, { Component } from 'react'
import Employee from './Employee'
// export const MyContext = React.createContext()

import { Provider } from './ContextAPI'

export default class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Rahul Sharma",
            department: "IT",
            salary: 5000.0
        }
    }
    changeHandler = () => {
        this.setState({
            salary: this.state.salary + 500
        })
    }
    render() {
        const data = {
            salary:this.state.salary,
            clickChange:this.changeHandler
        }
        return (
            <div>
                <h1>Demo Component</h1>
                {/* <Employee salary1={this.state.salary}/> */}
                {/* <MyContext.Provider value={this.state.salary}>
                    <Employee />
                </MyContext.Provider> */}

                {/* <MyContext.Provider value={data}>
                    <Employee />
                </MyContext.Provider> */}

                <Provider value={data}>
                    <Employee />
                </Provider>
            </div>
        )
    }
}
