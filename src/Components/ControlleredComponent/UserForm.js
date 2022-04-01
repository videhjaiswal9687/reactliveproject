import React, { Component } from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: "",
            email: "",
            password: "",
            gender: "",
            city: "",
            address: "",
            dob: ""
        }
        this.state = this.initialState
    }
    handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e =>{
        // It prevents a browser to reload or refresh
        e.preventDefault()
        console.log(this.state)
        this.setState(this.initialState)
    }
    render() {
        return (
            <div>
                <h1>UserForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            Name:
                        </label>
                        <input type="text"
                            name="name"
                            style={{ fontWeight: 'bold', fontSize: '32px' }}
                            value={this.state.name}
                            onChange={this.handleChange}
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
                            value={this.state.email}
                            onChange={this.handleChange}
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
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Enter a Password" />
                    </div>
                    <div>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            Gender:
                        </label>
                        <input type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}>
                        </input>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            Male
                        </label>
                        <input type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}>
                        </input>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            Female
                        </label>
                        <input type="radio"
                            name="gender"
                            value="Other"
                            checked={this.state.gender === "Other"}
                            onChange={this.handleChange}>
                        </input>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            Other
                        </label>
                    </div>
                    <div>
                        <label
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            City:
                        </label>
                        <select name="city" value={this.state.city}
                            onChange={this.handleChange}
                            style={{ fontWeight: 'bold', fontSize: '32px' }}>
                            <optgroup label='M.P'>
                                <option value="">Select a City</option>
                                <option value="Indore">Indore</option>
                                <option value="Ujjain">Ujjain</option>
                                <option value="Bhopal">Bhopal</option>
                            </optgroup>
                            <optgroup label='Karnataka'>
                                <option value="Banglore">Banglore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Manglore">Manglore</option>
                            </optgroup>
                        </select>
                    </div>
                    <div>
                        <label style={{ fontWeight: 'bold', fontSize: '32px' }}>DOB:</label>
                        <input type="date" name="dob" value={this.state.dob}
                            style={{ fontSize: '32px', fontWeight: 'bold' }}
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div>
                        <label style={{ fontWeight: 'bold', fontSize: '32px' }}>Address:</label>
                        <textarea 
                        name='address'
                        style={{ fontSize: '32px', fontWeight: 'bold' }}
                        onChange={this.handleChange}
                        rows={5}
                        cols={15}
                        placeholder="Enter a address"
                        ></textarea>
                    </div>
                    <div>
                        <button type='submit'
                            style={{ fontSize: '32px', fontWeight: 'bold' }}
                        >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
