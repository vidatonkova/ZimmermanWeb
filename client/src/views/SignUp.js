import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';


const SignUp = () => {
        return (
        <div class="container">
            <div class="row title-row">
                <div class="col-sm-12 text-center">
                    <h3>Sign Up</h3>
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    Full Name:
                </div>
                <div class="col-sm-9 test-left">
                    Box 
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    UF ID:
                </div>
                <div class="col-sm-9 test-left">
                    Box 
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    Username:
                </div>
                <div class="col-sm-9 test-left">
                    Box 
                </div>
            </div>

            <div class="row entry-row">
            <div class="col-sm-3 text-right">
                    <p>Password:</p>
                </div>
                <div class="col-sm-9 text-left">
                    <p>Box to enter information goes here</p>
                </div>
            </div>
        </div>
        );
};

export default SignUp;