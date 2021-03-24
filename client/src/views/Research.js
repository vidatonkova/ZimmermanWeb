import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Format.css';
import DrZ from './img/ZimmermanPic.jpg';
import Brox from './img/Broxson-headshot.jpg';
import Ayoub from './img/Faress-headshot.png';
import Xis from './img/Xis-headshot.jpg';
import Isaac from './img/Isaacs-headshot.jpg';


const Research = () => {
        return (
        <div class="container">
            <div class="row title-row">
                <div class="col-sm-12 text-left">
                    <h3>Research</h3>
                </div>
            </div>

            <div class="row picture-row">
                <div class="col-sm-3 text-right">
                    <div class thumbnail>
                        <a href="/Dr.-Zimmmerman-headshot.jpg">
                            <img src={DrZ} className="img-responsive" alt="DrZ"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Dr. Ellen Zimmermann, MD</h5>
                    <p>Dr. Ellen Zimmermann has 20 years experience in academic medicine at the University of Michigan. At the University of Michigan, Dr. Zimmermann built a vibrant basic and translational research program, built a national reputation in IBD and grew a clinical and research interest in the needs of college-aged patients with IBD. Dr. Zimmermann moved to the University of Florida in 2013, where she continued her passion of treating and researching IBD. Dr. Zimmermann is the current Vice Chair for Academic Affairs for the UF College of Medicine, along with being an active researcher and practicing physician.</p>
                </div>
            </div>

            <div class="row spacer-row">
                <div class="col-sm-12 text-center">
                </div>
            </div>

            <div class="row picture-row">
                <div class="col-sm-3 text-right">
                    <div class thumbnail>
                        <a href="/Chris_Bronxson-headshot.jpg">
                            <img src={Brox} className="img-responsive" alt="Broxson"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Chris Broxson, BS, BA</h5>
                    <p>Christopher Broxson, B.A. chemistry; B.S. microbiology, is the laboratory manager for Dr. Ellen Zimmermann in the division of Gastroenterology at the University of Florida. Mr. Broxson began his research career as a junior chemist working in the material sciences developing high-strength ceramic fibers for use in heat-resistant composites. He later moved to biology and spent over a decade studying the synthesis and regulation of catecholamines in aging organisms. Finding himself drawn to the detailed analysis of biochemistry, he later moved to studying transcriptional regulation in non-canonical and secondary DNA structures such as telomeric G-quadruplexes.  After a brief stint studying renal biology, it was a natural progression to move to the mucosal immunology of the intestine when he joined the Zimmermann laboratory in 2013. Mr. Broxson has now been happily managing research laboratories as a senior biological scientist for over twenty years.</p>
                </div>
            </div>

            <div class="row spacer-row">
                <div class="col-sm-12 text-center">
                </div>
            </div>

            <div class="row picture-row">
                <div class="col-sm-3 text-right">
                    <div class thumbnail>
                        <a href="/Fares_Ayoub-headshot.jpg">
                            <img src={Ayoub} className="img-responsive" alt="Ayoub"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Fares W. Ayoub, MD</h5>
                    <p>A native of Jordan, Fares graduated with honors from the University of Jordan School of Medicine and is currently an internal medicine resident physician with the Department of Medicine at the University of Florida. At the Department of Medicine, Fares leads the gastroenterology interest group and is a senior member of the residency research & board preparation committee. He is a founding member of the UFHealth Shands Hospital proton pump inhibitor stewardship initiative and participates in the clinical peer review committee at the Malcolm Randall Veterans Administration Hospital. Fares was voted the 2018 Resident of the Year and has received the Emerging Liver Scholar Award by the American Association for the Study of Liver Diseases (AASLD). In his free time, Fares enjoys good architecture, coffee and music. After three years with the Zimmermann lab, Fares will be starting his gastroenterology fellowship at the University of Chicago.</p>
                </div>
            </div>

            <div class="row spacer-row">
                <div class="col-sm-12 text-center">
                </div>
            </div>

            <div class="row picture-row">
                <div class="col-sm-3 text-right">
                    <div class thumbnail>
                        <a href="/Xis-headshot.jpg">
                            <img src={Xis} className="img-responsive" alt="Xis"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Xi Wang, MPH</h5>
                    <p>Xi Wang received her Bachelor’s degree from Xiangya School of Medicine, Central South University, China and her Master’s of Public Health in Epidemiology from Emory University. Xi desires to become a health outcome researcher, with research interests in drug safety and comparative effectiveness, with an emphasis on pregnant women as well as chronically ill patients, specifically patients with inflammatory bowel disease. Xi is currently a PhD student in the Department of Pharmaceutical Outcomes and policy at the University of Florida. In her doctoral dissertation, she is studying the spectrum of pharmaceutical management and disease burden of pregnant women with inflammatory bowel disease, as well as the safety of anti-TNFs as used in pregnant women with chronic inflammatory diseases in large population-based databases.</p>
                </div>
            </div>

            <div class="row spacer-row">
                <div class="col-sm-12 text-center">
                </div>
            </div>

            <div class="row picture-row">
                <div class="col-sm-3 text-right">
                    <div class thumbnail>
                        <a href="/Isaacs-headshot.jpg">
                            <img src={Isaac} className="img-responsive" alt="Isaacs"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Isaac Molina, BS</h5>
                    <p>Isaac Molina is the currently the IBD Patient Navigator for the UF Department of Gastroenterology. In addition to helping patients navigate through the twists and turns of healthcare, Isaac aides in various research projects that include analyzing college students with IBD’s transition to college and adult healthcare, as well as analyzing the outcomes of patients with Crohn’s Disease, with and without enteroenteric fistulas. Isaac graduated from the University of Florida with his Bachelor of Science degree with a specialization in Biology, and a minor in Spanish in May of 2017. Isaac is currently working on obtaining his Masters of Business Administration here at UF’s Hough Graduate School of Business. Isaac looks forward to a career in healthcare administration.</p>
                </div>
            </div>
        </div>
        );
};

export default Research;