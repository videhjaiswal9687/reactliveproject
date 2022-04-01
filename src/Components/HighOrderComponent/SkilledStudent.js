import React from 'react'

const SkilledStudent = (Student,hoursPerDay) => {

    class Skilled extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                course: this.props.course,
                hours: 0
            }
        }

        trainingInProgress = () => {
            this.setState({
                hours: this.state.hours + hoursPerDay
            })
        }
        render() {
            return (
                <Student hocGrade="Certified"
                    hocHours={this.state.hours}
                    hocCourse={this.state.course}
                    hocTrainingInProgress={this.trainingInProgress} 
                    {... this.props}
                    />
            )
        }
    }

    return Skilled;
}

export default SkilledStudent;