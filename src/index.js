import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//ReactDOM's render is used to render HTML Code and this method
//takes two arguments 1.) HTML Code and 2.) HTML Element

// ReactDOM.render(<h1 style={{backgroundColor:'brown',color:'white',textAlign:'center'}}>
//   Hello Guys!!!, How are you today?</h1>,document.getElementById('root'))

ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
