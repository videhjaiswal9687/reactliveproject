/*
Internal CSS:-
*/

const studStyle = {
    backgroundColor:'teal',
    color:'white',
    borderBottom:'5px solid black',
    textAlign:'center'
}
const facStyle = {
    backgroundColor:'olive',
    color:'white',
    borderBottom:'5px dashed black',
    textAlign:'center'
}

function Student(props){
    return(
        <div style={studStyle}>
            <h1>STUDENT DETAILS:-</h1> 
            <h1>Name:{props.name}</h1>
            <h1>Rollno:{props.rollno}</h1>
            <h1>Course:{props.course}</h1>
            <h1>Fees:{props.fees}</h1>
        </div>
    )
}
function Faculty(props){
    return (
        <div style={facStyle}>
          <h1>FACULTY DETAILS:-</h1>  
          <h1>Name:{props.name}</h1>
          <h1>Experience:{props.exp}</h1>
          <h1>Subject:{props.subject}</h1>
          <h1>Salary:{props.salary}</h1>
        </div>
    )
}
export  {Student,Faculty};