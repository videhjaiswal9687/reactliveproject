import React, { Component } from 'react'

export default class JsonDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studRecord: [
                {
                    stud_id: 1,
                    stud_name: "Rahul Sharma",
                    stud_rollno: 101,
                    stud_course: "BCA",
                    stud_fees: 45678.45,
                    stud_image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                },
                {
                    stud_id: 2,
                    stud_name: "Neha Sharma",
                    stud_rollno: 102,
                    stud_course: "MCA",
                    stud_fees: 55678.45,
                    stud_image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                },
                {
                    stud_id: 3,
                    stud_name: "Priya Verma",
                    stud_rollno: 103,
                    stud_course: "B.Tech",
                    stud_fees: 5678.45,
                    stud_image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                },
                {
                    stud_id: 4,
                    stud_name: "Ritu Sharma",
                    stud_rollno: 104,
                    stud_course: "BCA",
                    stud_fees: 35678.45,
                    stud_image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                },
                {
                    stud_id: 5,
                    stud_name: "Vijay Sharma",
                    stud_rollno: 105,
                    stud_course: "BCA",
                    stud_fees: 45678.45,
                    stud_image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                },
                {
                    stud_id: 6,
                    stud_name: "Rohini Sharma",
                    stud_rollno: 106,
                    stud_course: "MCA",
                    stud_fees: 55678.45,
                    stud_image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                },
                {
                    stud_id: 7,
                    stud_name: "Manisha Verma",
                    stud_rollno: 107,
                    stud_course: "B.Tech",
                    stud_fees: 5678.45,
                    stud_image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                },
                // {
                //     stud_id: 8,
                //     stud_name: "Vineeta Sharma",
                //     stud_rollno: 104,
                //     stud_course: "BCA",
                //     stud_fees: 35678.45,
                //     stud_image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                // }
            ]
        }
    }

    updateStudentFees = (getId) => {
        const newArr = this.state.studRecord.map(student => {
            if (student.stud_id !== getId) return student;
            else return { ...student, stud_fees: student.stud_fees + 100.0 }
        })
        this.setState({
            studRecord: newArr
        })
    }

    deleteStudent = (getId) => {
        const newArr = this.state.studRecord.filter(student => student.stud_id !== getId)
        this.setState({
            studRecord: newArr
        })
    }
    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {this.state.studRecord.map(student =>
                    <div key={student.stud_id} style={{ backgroundColor: 'teal', color: 'white' }} >
                        <img src={student.stud_image} width={100} height={100}></img>
                        <div style={{ textAlign: 'center' }}>
                            <h2>Name:{student.stud_name}</h2>
                            <h2>Rollno:{student.stud_rollno}</h2>
                            <h2>Course:{student.stud_course}</h2>
                            <h2>Fees:{student.stud_fees}</h2>
                        </div>
                        <button onClick={() => this.deleteStudent(student.stud_id)}><h1>Delete</h1></button>
                        <button onClick={() => this.updateStudentFees(student.stud_id)}><h1>Update</h1></button>
                    </div>
                )}
                {/* <table align="center" border='1'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rollno</th>
                            <th>Course</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studRecord.map(student => 
                            <tr key={student.stud_id}>
                                <td>{student.stud_name}</td>
                                <td>{student.stud_rollno}</td>
                                <td>{student.stud_course}</td>
                                <td>{student.stud_fees}</td>
                                <td><img src={student.stud_image} width={100} height={100}></img></td>
                            </tr>
                            )}
                    </tbody>
                </table> */}
            </div>
        )
    }
}
