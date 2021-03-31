import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-1 text-left">
                    <p> Logo </p>
                </div>
                <div class="col-sm-1 text-center">
                    <Link className = "nav-link" to='/Home'>HOME</Link>
                </div>
                <div class="col-sm-1 text-center">
                <Link className = "nav-link" to='/Basic'>Basic IBD</Link>
                </div>
                <div class="col-sm-1 text-center">
                    <Link className = "nav-link" to='/Research'>Research</Link>
                </div>
                <div class="col-sm-2 text-center">
                    <Link className = "nav-link" to='/Events'>Events and Surveys</Link>
                </div>
                <div class="col-sm-1 text-center">
                    <Link className = "nav-link" to='/My_Health'>My Health</Link>
                </div>
                <div class="col-sm-2 text-center">
                    <Link className = "nav-link" to='/Discussion'>Discussion Board</Link>
                </div>
                <div class="col-sm-2 text-center"> 
                    <Link className = "nav-link" to='/FAQ'>FAQ/Contact</Link>
                </div>
                <div class="col-sm-1 text-right">
                    <Link className = "nav-link" to='/Sign_In'>Sign In</Link>
                </div>
            </div>
        </div>
    )
};

export default NavBar;

/*

Test out messing with the Nav Bar to make it horizontal

*/