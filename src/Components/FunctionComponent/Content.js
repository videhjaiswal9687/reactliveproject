import React from 'react'
import {Student,Faculty} from './Student'
import {Employee,Manager} from '../ClassComponent/Employee'
export const Content = () => {
  return (
    <div style={{marginTop:120,marginBottom:120}}>
        {/* <Faculty name="Manoj Verma" exp={5} subject="Math" salary={25000.0} /><hr></hr>
        <Student name="Rahul Sharma" rollno={101} course="B.Tech" fees={56789.500}/>
        <Student name="Neha Shamra" rollno={102} course="M.Tech" fees={78967.522} />  */}
        <Manager name="Manoj Verma" exp={5} department="IT" salary={25000.0} />
        <Employee name="Rohit Verma" id={101} salary={32000.0} department="IT"/>
        <Employee name="Priya Sharma" id={102} salary={22000.0} department="HR"/>
    </div>
  )
}
