import React, { Component } from 'react'

export default class TestDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
        this.textInput = React.createRef()
    }
    componentDidMount() {
        // console.log(this.textInput.current)
        this.textInput.current.focus()
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            name: this.textInput.current.value
        })
    }
    render() {
        return (
            <div>
                <h1>TestDemo</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            Name:
                        </label>
                        <input type="text"
                            name="name"
                            style={{ fontWeight: 'bold', fontSize: '32px' }}
                            ref={this.textInput}
                            placeholder="Enter a Name" />
                    </div>
                    <div>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            Email:
                        </label>
                        <input type="email"
                            name="email"
                            style={{ fontWeight: 'bold', fontSize: '32px' }}
                            placeholder="Enter a Email" />
                    </div>
                    <div>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            Password:
                        </label>
                        <input type="password"
                            name="password"
                            style={{ fontWeight: 'bold', fontSize: '32px' }}
                            placeholder="Enter a Password" />
                    </div>
                    <input type="submit" />
                </form>
                <h1>Name:{this.state.name}</h1>
            </div>
        )
    }
}
