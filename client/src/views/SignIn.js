import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Format.css';


const SignIn = () => {
        return (
        <div class="container">
            <div class="row title-row">
                <div class="col-sm-12 text-center">
                    <h3>Sign In</h3>
                </div>
            </div>
            <div class="row entry-row">
                <div class="col-sm-5 text-right">
                    Username:
                </div>
                <div class="col-sm-7 test-left">
                    <form>
                        <input type="text" name="username"></input>
                    </form> 
                </div>
            </div>
            <div class="row entry-row">
            <div class="col-sm-5 text-right">
                    <p>Password:</p>
                </div>
                <div class="col-sm-7 text-left">
                    <form>
                        <input type="password" name="password"></input>
                    </form> 
                </div>
            </div>
            <div class="row entry-row">
                <div class="col-sm-6 text-right">
                    <p>Dont have an account?</p>
                </div>
                <div class="col-sm-6 text-left">
                    <Link className = "nav-link" to='/Sign_Up'>Sign Up</Link>
                </div>
            </div>
        </div>
        );
};

export default SignIn;