import React from 'react'
// import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import AIPage from './AIPage';
import Signup from './Signup';
import About from './About';
// import Form from './Form';
function MyNavBar() {
    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand text-white" href="/" style={{paddingLeft: 40}}> QXAI Classifier</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/about">About</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link text-white" href="/login">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="/signup">Sign Up</a>
            </li> */}
            
             
            </ul>
        </div>
        </nav>
        <br />
        <Routes> 
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                {/* <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>      */}
        </Routes>
         
        </>
    );
}
export default MyNavBar; 
