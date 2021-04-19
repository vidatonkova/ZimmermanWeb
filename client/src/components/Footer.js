import React from "react";
import "./../views/Format.css";

const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="container">
        <hr />

        <div class="row pre-footer-row">
        </div>

        <div class="row footer-row">
          <div class="col-sm-6 text-center">
            <h4>University of Florida</h4>
          </div>
          <div class="col-sm-6 text-center">
            <h4>University of Miami</h4>
          </div>
        </div>

        <div class="row footer-row">
        <div class="col-sm-6 text-center">
        <a class="yellow-footer" href="https://gastroliver.medicine.ufl.edu/ibd/">
              {" "}
              <h9>UF IBD website</h9>
            </a>
          </div>
          <div class="col-sm-6 text-center">
          <a className="yellow-footer" href="https://med.miami.edu/en/departments/medicine/divisions/crohns-and-colitis-center/">
              {" "}
              <h9>UM crohns and colotis website</h9>
            </a>
          </div>
        </div>
        
        <div class="row sub-footer-row">
          <div class="col-sm-3 text-center">
            <h6>Address</h6>
            <h9>UF Division of Gastroenterology, Hepatology & Nutrition
                PO Box 100214 Gainesville, FL 32610-0214
            </h9>
          </div>
          <div class="col-sm-3 text-center">
            <h6>Contact</h6>
            <p>
              Tel: 352-273-9472<br></br>
              Fax: 352-627-4761<br></br>
              Tel: 352-273-9400(patient-related)<br></br>
              Fax: 352-627-4179(patient-related)<br></br>
            </p>
          </div>
          <div class="col-sm-3 text-center">
          <h6>Address</h6>
            <h9>UM Crohn’s and Colitis Center 
                1475 NW 12th Ave floor 1, Miami, FL 33136
            </h9>
          </div>

          <div class="col-sm-3 text-center">
          <h6>Contact</h6>
            <p>
              Tel: 305-243-8644<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
