import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import UserForm from '../ControlleredComponent/UserForm';
import Email from '../ChildComponent/Email';
import Profile from '../ChildComponent/Profile';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'
/*
npm install react-router-dom
*/

/*

BrowserRouter:
1.)It is used for doing client side routing with URL Segments.
2.)It manages history API of HTML5. That means when we route through different pages that time we 
   should maintain history so that components will be available to route back again.

Link:- It is router API which allows accessing navigation throughout the application.
Route:- It is used to render userInterface when any location matches.
Routes:- A container for a nested tree of elements that renders the branch that
best matches the current location.
*/

export default class RoutingDemo extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {/* <Header /> */}
                        <Navbar bg="dark" expand="lg">
                            <Container>
                                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/"
                                            style={{ fontSize: 28, fontWeight: 'bold' ,color:'white' }}>Home</Nav.Link>
                                        <Nav.Link href="/login"
                                            style={{ fontSize: 28, fontWeight: 'bold',  color:'white'}}>Login</Nav.Link>
                                        <Nav.Link href="/contact"
                                            style={{ fontSize: 28, fontWeight: 'bold' , color:'white'}}>Contact</Nav.Link>
                                        <Nav.Link href="/about"
                                            style={{ fontSize: 28, fontWeight: 'bold', color:'white' }}>AboutUs</Nav.Link>
                                        <Nav.Link href="/electronics/mobile/121"
                                            style={{ fontSize: 28, fontWeight: 'bold', color:'white' }}>Product</Nav.Link>            
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home name="Rahul Sharma" />}></Route>
                        <Route path="/login" element={<Login isLoggedIn={false} />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/contact" element={<UserForm />}></Route>
                        <Route path="/about" element={<AboutUs />}></Route>
                        <Route path="/about/email" element={<Email />}></Route>
                        <Route path="/about/profile" element={<Profile />}></Route>
                        <Route path="/electronics/:category" element={<Product />}></Route>
                        <Route path="/electronics/:category/:id" element={<Product />}></Route>
                    </Routes>
                </Router>
            </div>
        )
    }
}
const Product = () => {
    const { category, id } = useParams()
    return (
        <div style={{ backgroundColor: 'olive', color: 'white' }}>
            <h1>Product Page</h1>
            <h1>Product Name:{category}</h1>
            <h1>Product Id:{id}</h1>
        </div>
    )
}
const PushComponent = () => {
    let navigate = useNavigate()
    function handleClick() {
        navigate("/dashboard")
    }
    return (
        <button type='button' onClick={handleClick}>
            <h1>move to Dashboard</h1>
        </button>
    )
}

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: 'olive', color: 'white' }}>
            <h1>AboutUs Page</h1>
            <PushComponent />
            <ul style={{ fontSize: '28px' }}>
                <li><Link to="/about/email" style={{ color: 'white' }}>Email</Link></li>
                <li><Link to="/about/profile" style={{ color: 'white' }}>Profile</Link></li>
            </ul>
        </div>
    )
}

const Dashboard = () => {
    let navigate = useNavigate()
    function handleClick() {
        navigate("/")
    }
    return (
        <div style={{ backgroundColor: 'green', color: 'white' }}>
            <h1>Dashboard Page</h1>
            <button type='button' onClick={handleClick}>
                <h1>Home</h1>
            </button>
            <button type='button' onClick={() => navigate(-1)}>
                <h1>Back</h1>
            </button>
        </div>
    )
}

function Home(props) {
    let navigate = useNavigate()
    return (
        <div style={{ backgroundColor: 'teal', color: 'white' }}>
            <h1>Home Page</h1>
            <h1>Name:{props.name}</h1>
            <button type='button' onClick={() => navigate(-2)}>
                <h1>Back</h1>
            </button>
        </div>
    )
}
function Login(props) {
    return (
        <div style={{ backgroundColor: 'orange', color: 'white' }}>
            <h1>Login Page</h1>
            {props.isLoggedIn ? <Navigate to="/dashboard" /> : <h1>Please sign up</h1>}
        </div>
    )
}

function Header() {
    return (
        <div>
            <ul style={{ fontSize: '28px' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/electronics/mobile">Product</Link></li>
            </ul>
        </div>
    )
}