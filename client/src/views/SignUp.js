import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Format.css";

const SignUp = () => {
  return (
    <div class="container">
      <div class="row topSpace-row"></div>
      <div class="row sub-title-row">
        <div class="col-sm-12 text-center">
          <h3>Sign Up</h3>
        </div>
      </div>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName4">Name</label>
            <input
              type="newName"
              class="form-control"
              id="inputName4"
              placeholder="Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputUFID4">UF ID</label>
            <input
              type="newUFID"
              class="form-control"
              id="inputUFID4"
              placeholder="UFID"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputUsername4">Username</label>
            <input
              type="newUsername"
              class="form-control"
              id="inputUsername4"
              placeholder="Username"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="newPassword"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
