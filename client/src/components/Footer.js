import React from "react";
import "./../views/Format.css";

const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="container">
        <hr />
        <div class="row title-row">
          <div class="col-sm-4 text-center">
            <h6>Call Us</h6>
            <p>407-407-4070</p>
          </div>
          <div class="col-sm-4 text-center">
            <h6>Email Us</h6>
            <p>saySomething@gmail.com</p>
          </div>
          <div class="col-sm-4 text-center">
            <h6>Contact UF</h6>
            <p>ufl.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
