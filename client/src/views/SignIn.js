
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Format.css';
import { React, useState} from 'react';
import Axios from 'axios';
import Async from 'react-async';
import config from '../config.js';
import ListGroup from 'react-bootstrap/ListGroup';


const SignIn = (props) => {
  let [u, setU] = useState("");
  let [p, setP] = useState("");

  
    const handleChangeU = (event) => {
      setU(event.target.value);
    }
  const handleChangeP = (event) => {
      setP(event.target.value);
    }

    const handleSignIn = () => {
      console.log(u);
      console.log(p);
      
    }

  const loadU = () => {
    return Axios.get(
      config.backpoint + '/users/find'
    )
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error(error)
        return error;
    })
}

   
  return (
    <div class="container">
      <div class="row sub-title-row">
        <div class="col-sm-12 text-center">
          <h3>Sign In</h3>
        </div>
      </div>
      <form onSubmit={handleSignIn}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputUsername4">Username</label>
            <input
              type="text" value={u} onChange={handleChangeU}
              class="form-control"
              id="inputUsername4"
              placeholder="Username"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="text" value={p} onChange={handleChangeP}
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2 text-center">
          <button type="submit" class="btn btn-primary custom-button">
            Sign in
          </button>
        </div>
        <div class="col-sm-5"></div>
      </div>
      </form>
      <div class="row spacer-row"></div>
      <div class="row align-items-center">
        <div class="col-sm-3"></div>
        <div class="col-sm-3 sign-up-box text-right  align-self-center">
          <p>Dont have an account?</p>
        </div>
        <div class="col-sm-3 sign-up-box text-left align-self-center">
          <Link className="nav-link custom-button" to="/Sign_Up">
            Sign Up
          </Link>
        </div>
        <div class="col-sm-4"></div>

        <Async promiseFn={loadU}>
            {({data, error, isLoading}) => {
                    if (isLoading)
                        return "Loading...";
                    if (error) {
                        console.log(error);
                        return "Oops, something went wrong";
                    }
                    if (data && Array.isArray(data)) {
                        return data.reverse().map(entry => {
                            return <div>
                                <ListGroup.Item variant="dark">{u}</ListGroup.Item>
                                <ListGroup.Item>{p}</ListGroup.Item>
                                <ListGroup.Item>{entry.u}</ListGroup.Item>
                                <ListGroup.Item>{entry.p}</ListGroup.Item>
                            </div>
                        })
                    }
                }
            }
        </Async>
      </div>
    </div>
  );

}

                              

export default SignIn;
