import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Format.css";
import zimmerman from "./img/zimmerman.png";
import rampertab from "./img/rampertab.jpg";
import pham from "./img/pham.png";
import kerman from "./img/kerman.png";
import chaudhry from "./img/chaudhry.jpg";
import abreu from "./img/abreu.png";

const Research = () => {
  return (
    <div class="container">
      <div class="row topSpace-row"></div>
      <div class="row title-row">
        <div class="col-sm-12 text-center">
          <h2>Research</h2>
        </div>
      </div>

      <div class="row spacer-row"></div>

      <div class="row align-items-center">
        <div class="col-sm-2 text-center"></div>
        <div class="col-sm-8 text-center note-block align-self-center">
          <p>To make an appointment with any of these physicians, contact (352) 273-9400. </p>
        </div>
        <div class="col-sm-2 text-center"></div>
      </div>

      <div class="row spacer-row"></div>

      <div class="row title-row">
        <div class="col-sm-12 text-left">
          <h2>University of Florida</h2>
        </div>
      </div>

      <div class="row picture-row">
        <div class="col-sm-4 text-right">
          <div class thumbnail>
            <a href="/zimmerman.png">
              <img src={zimmerman} className="img-responsive" alt="DrZ" />
            </a>
          </div>
        </div>
        <div class="col-sm-8 text-left">
          <h5>Dr. Ellen Zimmermann</h5>
          <p>
            Dr. Ellen Zimmermann has 20 years experience in academic medicine at
            the University of Michigan. At the University of Michigan, Dr.
            Zimmermann built a vibrant basic and translational research program,
            built a national reputation in IBD and grew a clinical and research
            interest in the needs of college-aged patients with IBD. Dr.
            Zimmermann moved to the University of Florida in 2013, where she
            continued her passion of treating and researching IBD. Dr.
            Zimmermann is the current Vice Chair for Academic Affairs for the UF
            College of Medicine, along with being an active researcher and
            practicing physician.
          </p>
        </div>
      </div>
      <div class="row picture-contact-row">
          <div class="col-sm-4 text-left">
            <p class="font-weight-bold">Contact Info:</p>
          </div>
      </div>
      <div class="row picture-row">
          <div class="col-sm-4 text-left">
            <p>Email: ellen.zimmermann@medicine.ufl.edu</p>
          </div>
      </div>

      <div class="row spacer-row"></div>

      <div class="row picture-row">
        <div class="col-sm-4 text-right">
          <div class thumbnail>
            <a href="/chaudhry.jpg">
              <img src={chaudhry} className="img-responsive" alt="chaudhry" />
            </a>
          </div>
        </div>
        <div class="col-sm-8 test-left">
          <h5>Dr. Naueen Chaudhry </h5>
          <p>
            Some text here
          </p>
        </div>
      </div>
      <div class="row picture-contact-row">
          <div class="col-sm-4 text-left">
            <p class="font-weight-bold">Contact Info:</p>
          </div>
      </div>
      <div class="row picture-row">
          <div class="col-sm-4 text-left">
            <p>Email: Naueen.Chaudhry@medicine.ufl.edu</p>
          </div>
      </div>

      <div class="row spacer-row">
        <div class="col-sm-12 text-center"></div>
      </div>

      <div class="row picture-row">
        <div class="col-sm-4 text-right">
          <div class thumbnail>
            <a href="/pham.png">
              <img src={pham} className="img-responsive" alt="pham" />
            </a>
          </div>
        </div>
        <div class="col-sm-8 test-left">
          <h5>Dr. Angela Pham </h5>
          <p>
            Some text here
          </p>
        </div>
      </div>
      <div class="row picture-contact-row">
          <div class="col-sm-4 text-left">
            <p class="font-weight-bold">Contact Info:</p>
          </div>
      </div>
      <div class="row picture-row">
          <div class="col-sm-4 text-left">
            <p>Email: Angela.Pham@medicine.ufl.edu</p>
          </div>
      </div>

      <div class="row spacer-row">
        <div class="col-sm-12 text-center"></div>
      </div>

      <div class="row picture-row">
        <div class="col-sm-4 text-right">
          <div class thumbnail>
            <a href="/rampertab.jpg">
              <img src={rampertab} className="img-responsive" alt="rampertab" />
            </a>
          </div>
        </div>
        <div class="col-sm-8 test-left">
          <h5>Dr. Devi Rampertab</h5>
          <p>
            Some text Here
          </p>
        </div>
      </div>
      <div class="row picture-contact-row">
          <div class="col-sm-4 text-left">
            <p class="font-weight-bold">Contact Info:</p>
          </div>
      </div>
      <div class="row picture-row">
          <div class="col-sm-4 text-left">
            <p>Email: devi.rampertab@medicine.ufl.edu</p>
          </div>
      </div>

      <div class="row spacer-row">
        <div class="col-sm-12 text-center"></div>
      </div>

      <div class="row title-row">
        <div class="col-sm-12 text-left">
          <h2>University of Miami</h2>
        </div>
      </div>

      <div class="row picture-row">
        <div class="col-sm-4 text-right">
          <div class thumbnail>
            <a href="/abreu.png">
              <img src={abreu} className="img-responsive" alt="abreu" />
            </a>
          </div>
        </div>
        <div class="col-sm-8 test-left">
          <h5>Dr. Maria Abreu</h5>
          <p>
            Some text here
          </p>
        </div>
      </div>
      <div class="row picture-contact-row">
          <div class="col-sm-4 text-left">
            <p class="font-weight-bold">Contact Info:</p>
          </div>
      </div>
      <div class="row picture-row">
          <div class="col-sm-4 text-left">
            <p>Phone: Contact: 305-243-6404</p>
            <p>Email: mabreu1@med.miami.edu</p>

          </div>
      </div>

      <div class="row spacer-row">
        <div class="col-sm-12 text-center"></div>
      </div>

      <div class="row picture-row">
        <div class="col-sm-4 text-right">
          <div class thumbnail>
            <a href="/kerman.png">
              <img src={kerman} className="img-responsive" alt="kerman" />
            </a>
          </div>
        </div>
        <div class="col-sm-8 test-left">
          <h5>Dr. David Kerman</h5>
          <p>
            Some text here
          </p>
        </div>
      </div>
      <div class="row picture-contact-row">
          <div class="col-sm-4 text-left">
            <p class="font-weight-bold">Contact Info:</p>
          </div>
      </div>
      <div class="row picture-row">
          <div class="col-sm-4 text-left">
            <p>Phone: Contact: 305-243-8644</p>
            <p>Email: dkerman@miami.edu</p>
          </div>
      </div>
    </div>
  );
};

export default Research;
