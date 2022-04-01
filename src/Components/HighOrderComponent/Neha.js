import React, { Component } from 'react'
import SkilledStudent from './SkilledStudent'
class Neha extends Component {
    render() {
        return (
            <div>
                <h1>Neha's Details</h1>
                <h1>Course:{this.props.hocCourse}</h1>
                <h1>Hours:{this.props.hocHours}</h1>
                <h1>Grade:{this.props.hocGrade}</h1>
                <h1>Address:{this.props.address}</h1>
                <button onClick={this.props.hocTrainingInProgress}>Progress</button>
            </div>
        )
    }
}
export default SkilledStudent(Neha,6)