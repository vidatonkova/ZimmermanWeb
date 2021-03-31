import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Format.css';


const SignUp = () => {
        return (
        <div class="container">
            <div class="row title-row">
                <div class="col-sm-12 text-center">
                    <h3>Sign Up</h3>
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-5 text-right">
                    Full Name:
                </div>
                <div class="col-sm-7 test-left">
                    <form>
                        <input type="text" name="newName"></input>
                    </form>  
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-5 text-right">
                    UF ID:
                </div>
                <div class="col-sm-7 test-left">
                    <form>
                        <input type="text" name="newUFID"></input>
                    </form>  
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-5 text-right">
                    Username:
                </div>
                <div class="col-sm-7 test-left">
                    <form>
                        <input type="text" name="newUsername"></input>
                    </form>  
                </div>
            </div>

            <div class="row entry-row">
            <div class="col-sm-5 text-right">
                    <p>Password:</p>
                </div>
                <div class="col-sm-7 text-left">
                    <form>
                        <input type="password" name="newPassword"></input>
                    </form> 
                </div>
            </div>
        </div>
        );
};

export default SignUp;