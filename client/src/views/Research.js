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
      <div class="row title-row">
        <div class="col-sm-12 text-left">
          <h2>Research</h2>
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
        <div class="col-sm-8 test-left">
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

      <div class="row spacer-row">
        <div class="col-sm-12 text-center"></div>
      </div>

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

      <div class="row spacer-row">
        <div class="col-sm-12 text-center"></div>
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
          <h5>(a)	Dr. Maria Abreu</h5>
          <p>
            Some text here
          </p>
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
    </div>
  );
};

export default Research;
