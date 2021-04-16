import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Collapse } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Format.css";

const health = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  return (
    <div>
      <div class="container">
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>MyHealth and Resources</h2>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-center">
            On this page you will find informmation regarding general resources
            about your health and specific resources concerning IBD.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>College Transition and IBD</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-6">CCFA:</div>
          <div className="col-sm-6 text-left">
            <a href="https://site.crohnscolitisfoundation.org/campus-connection">
              {" "}
              <h9>CC Foundation Campus Connections</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-6">Living in a College Dorm:</div>
          <div className="col-sm-6 text-left">
            <a href="https://site.crohnscolitisfoundation.org/campus-connection/navigating-college/dorm-life/">
              {" "}
              <h9>CC Foundation Navigating College Life</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-6">Diet While Away at College:</div>
          <div className="col-sm-6 text-left">
            <a href="https://site.crohnscolitisfoundation.org/campus-connection/managing-ibd/nutrition/">
              {" "}
              <h9>CC Foundation Managing Nutrition</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-6">Social Life:</div>
          <div className="col-sm-6 text-left">
            <a href="https://site.crohnscolitisfoundation.org/campus-connection/navigating-college/social-life/">
              {" "}
              <h9>CC Foundation Navigating Social Life</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Recommended Books about Inflammatory Bowel Disease</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen1(!open1)}
              aria-controls="example-collapse-text"
              aria-expanded={open1}
              className="faq-box"
            >
              <i>Crohn’s and Colitis: Understanding and Managing IBD</i>
            </Button>
            <Collapse in={open1}>
              <div id="example-collapse-text">
                Hillary Steinhart, MD, MSc, FRCP(C)
                <br></br>
                Paperback: 224 pages
                <br></br>
                Publisher: Robert Rose; 1st edition (April 20, 2006)
                <br></br>
                <br></br>
                Description: Crohn’s and Colitis: Understanding and Managing IBD
                is written by a leading expert in the field and provides the
                most current and important information on these conditions. The
                book answers important questions and covers topics such as:
                <br></br>● What is inflammatory bowel disease?
                <br></br>● What are the symptoms?
                <br></br>● How do you get Crohn’s disease or ulcerative colitis?
                <br></br>● What to expect when you have IBD?
                <br></br>● Dietary treatment
                <br></br>● Drug therapy
                <br></br>● Surgery
                <br></br>● Psychological factors
                <br></br>● Children with IBD
                <br></br>● Alternative medicinal therapies
                <br></br>
                <br></br>
                Learning as much as possible about your condition is an
                important step toward taking charge and relieving the negative
                effects of IBD on daily life. This book will give you a better
                understanding of diagnosis and treatment and help you to lead a
                useful and productive life. While there is no cure at this time,
                Dr. Steinhart’s expertise and practical advice will go a long
                way to improve health and quality of life and provide hope to
                your loved ones.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="faq-box"
            >
              <i>
                Crohn’s Disease and Ulcerative Colitis: Everything You Need to
                Know
              </i>
            </Button>
            <Collapse in={open2}>
              <div id="example-collapse-text">
                Fred Saibel, MD
                <br></br>
                Paperback: 224 pages
                <br></br>
                Publisher: Firefly
                <br></br>
                <br></br>
                Description: Inflammatory bowel disease (IBD) includes two
                chronic conditions, Crohn’s disease and ulcerative colitis. It
                has remained for too long the secret illness no one wants to
                admit to having, let alone discuss. One percent of North
                Americans have IBD, yet its cause is unknown and there is no
                known cure.
                <br></br>
                <br></br>
                Revised, updated and expanded, Crohn’s Disease and Ulcerative
                Colitis is the complete practical guide for anyone dealing with
                inflammatory bowel disease. Dr. Fred Saibil, a renowned expert
                on IBD, provides concise and current practical information on
                Crohn’s disease, ulcerative colitis, and related conditions.
                There is an entirely new chapter on self-management of IBD, with
                7 added tables and drawings to guide you.
                <br></br>
                <br></br>
                Crohn’s Disease and Ulcerative Colitis includes important
                information on:
                <br></br>● Why people get IBD, including the hygiene hypothesis,
                and new genetic data
                <br></br>● Diagnostic methods, including enteroscopy, capsule
                endoscopy, CT, MR, and PET scans
                <br></br>● Effects of diet, including foods and food components
                that can cause diarrhea and gas
                <br></br>
                Surgical options
                <br></br>● The expanding choice of drugs, plus probiotics and
                prebiotics
                <br></br>● Issues specific to children with IBD
                <br></br>● Effects on sex, child-bearing and drug usage during
                pregnancy and breast-feeding
                <br></br>● Self-management -- how to help your medical team help
                you
                <br></br>● How to take care of your bones
                <br></br>● How to cope with being in hospital
                <br></br>
                <br></br>
                For people with IBD, their relatives, and their caregivers, this
                book explains the plain facts about a disease that seriously
                affects the daily lives of so many.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
              aria-expanded={open3}
              className="faq-box"
            >
              <i>
                IBD Self-Management: The AGA Guide to Crohn’s Disease and
                Ulcerative Colitis
              </i>
            </Button>
            <Collapse in={open3}>
              <div id="example-collapse-text">
                Sunanda V. Kane, M.D.
                <br></br>
                MSPH Paperback: 288 pages
                <br></br>
                Publisher: AGA Press (2010)
                <br></br>
                <br></br>
                Description: Nearly 100,000 people in the United States of all
                ages will be diagnosed with inflammatory bowel disease (IBD) –
                Crohn’s disease and ulcerative colitis – this year. Because IBD
                is a chronic condition, it requires a lifetime of daily
                self-management. Knowledge is the key to living well. Reviewed
                by the American Gastroenterological Association, and written in
                an easy-to-read style, this book offers advice from a trusted
                expert, Dr. Sunanda Kane, on all aspects of living with IBD.
                Readers learn the latest about symptoms and management; use of
                medicines and surgery; the role of nutrition, supplements, and
                specific foods and diets; IBD complications; how to increase
                fertility and have a healthy pregnancy; and, other ways that IBD
                affects people’s lives. This book is for people of all ages,
                including parents concerned about growth in their children and
                teens with IBD.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen4(!open4)}
              aria-controls="example-collapse-text"
              aria-expanded={open4}
              className="faq-box"
            >
              <i>Learning Sickness: A Year With Crohn’s Disease</i>
            </Button>
            <Collapse in={open4}>
              <div id="example-collapse-text">
                James M. Lang
                <br></br>
                Paperback: 187 pages
                <br></br>
                Publisher: Capital Books (VA) (July 20, 2005)
                <br></br>
                <br></br>
                Description: Learning Sickness is the compelling narrative of
                Jim’s battle with Crohn’s Disease. Diagnosed at the age of 26,
                Jim spent the next five years coming to terms with how to live
                with a chronic illness. During that time he fathered two
                children, earned a Ph.D., accepted his first teaching position,
                and began a writing career. Jim Lang provides a completely
                honest look at the way the disease can affect every aspect of a
                person’s life: physical, emotional, and spiritual.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen5(!open5)}
              aria-controls="example-collapse-text"
              aria-expanded={open5}
              className="faq-box"
            >
              <i>Pete Learns All About Crohn’s and Colitis</i>
            </Button>
            <Collapse in={open5}>
              <div id="example-collapse-text">
                Hilarie and Joe Staton
                <br></br>
                Comic book
                <br></br>
                Publisher: Crohn’s & Colitis Foundation of America (CCFA) (2007)
                <br></br>
                <br></br>
                View and download this comic book from the following web page on
                the CCFA web site:
                <a href="http://www.ccfa.org/info/brochures/ccfa.online.comicbook.pdfwww.ccfa.org">
                  {" "}
                  <h9>CCFA Comic Book</h9>
                </a>
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>University of Florida Resources</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● UF IBD College Transition Video:
            <a href="https://youtu.be/r0Ctc2yxin0">
              {" "}
              <h9>UF IBD Transition</h9>
            </a>
          </div>
          <div className="col-sm-12 text-left">
            ● UF Inflammatory Bowel Disease Program :
            <a href="https://gastroliver.medicine.ufl.edu/ibd/">
              {" "}
              <h9>UF IBD Program</h9>
            </a>
          </div>
          <div className="col-sm-12 text-left">
            ● UF IBD Support Group:
            <a href="https://gastroliver.medicine.ufl.edu/ibd/ibd-patient-info/uf-student-ibd-support-system/">
              {" "}
              <h9>UF IBD Support Group</h9>
            </a>
          </div>
          <div className="col-sm-12 text-left">
            ● CCFA Gainesville Support Group:
            <a href="https://www.crohnscolitisfoundation.org/chapters/centralflorida/support-groups/ibd-support-group-gainesville-fl-not-currently-meeting">
              {" "}
              <h9>CCFA Support Group</h9>
            </a>
          </div>
          <div className="col-sm-12 text-left">
            ● Disability Resource Center:
            <a href="https://disability.ufl.edu">
              {" "}
              <h9>Disability Resource Center</h9>
            </a>
          </div>
          <div className="col-sm-12 text-left">
            ● Psychologists Specializing in Chronic Illness at UF:
            <a href="https://chp.phhp.ufl.edu/about-2/people/core-faculty/lori-b-waxenberg-phd-abpp/">
              {" "}
              <h9>UF Chronic Illness Specialists</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>University of Miami Resources</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● University of Miami Crohn’s and Colitis Center:
            <a href="https://med.miami.edu/en/departments/medicine/divisions/crohns-and-colitis-center">
              {" "}
              <h9>UM CCC</h9>
            </a>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● Dr. Maria T. Abreu Video:
            <a href="https://vimeo.com/378441358">
              {" "}
              <h9>Dr. Abreu Video</h9>
            </a>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● CCFA University of Miami Support Group:
            <a href="https://www.crohnscolitisfoundation.org/chapters/florida/support-groups/ccfa-support-group-miami-fl-UM">
              {" "}
              <h9>CCFA UM Support Group</h9>
            </a>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● CCFA Southern Florida Chapter:
            <a href="https://www.crohnscolitisfoundation.org/chapters/florida">
              {" "}
              <h9>CCFA Southern FL Chapter</h9>
            </a>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● University of Miami Office of Disability Services:
            <a href="https://camnercenter.miami.edu/disability-services/index.html">
              {" "}
              <h9>UM Office of Disability Services</h9>
            </a>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● University of Miami Pediatric Psychology Clinic:
            <a href="http://pediatrics.med.miami.edu/mailman-center/clinical-services/pediatric-psychology/">
              {" "}
              <h9>UM Pediatric Psychology Clinic</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Maintaining My Health</h2>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-center">
            <Link className="nav-link" to="/MyPassport" class="nav-link">
              <h4>My IBD Passport</h4>
            </Link>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Preventing Infections with Vaccines</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            Vaccines are used to reduce our risk for infections. Some vaccines
            are made with a live virus and others are made with an inactivated
            form of the virus. Vaccines that are made with a live virus may
            cause some symptoms of the virus. However, they lower your risk for
            getting a more serious form of the infection.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            People with IBD often need to take immunosuppressive medicines,
            which put them at increased risk for certain infections. People
            taking thiopurine medicines (like azathioprine [Imuran®] and
            mercaptopurine [Purinethol®]) are at a high risk for infections with
            viruses that stay in the body for a long time and become active
            again. For example, the virus that causes chickenpox can return much
            later in life as shingles. The virus that causes mononucleosis
            (Epstein Barr virus or EBV) can also become active again. The human
            papilloma virus (HPV), which contributes to cervical cancer, is more
            likely to cause an infection in women taking thiopurine medicines.
            People taking anti-TNF medicines, including infliximab (Remicade®),
            adalimumab (Humira®), and certolizumab pegol (Cimzia®), have a
            higher risk for diseases such as tuberculosis and histoplasmosis.
            There is also an increased risk for bacterial infections of the skin
            and soft tissues. Pneumonia is the most common, serious, and
            sometimes fatal infection that can occur while a person is taking an
            anti-TNF medicine.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Vaccines</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            The <b>pneumonia vaccine</b> (Pneumovax®) can protect people against
            23 of the most aggressive types of pneumonia with just one shot. It
            is not a live vaccine and will not give you pneumonia. This vaccine
            is advised for all adults age 65 and older and also for anyone who
            is taking immunosuppressive medicines (including prednisone). A
            booster is given at 5 years.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            The <b>flu vaccine</b> can prevent the flu or shorten the time the
            flu lasts and ease its symptoms. A flu shot is advised each fall for
            all people with IBD. Anyone who takes immunosuppressive medicines
            should get the shot and avoid the nasal spray. The shot is made of
            inactivated virus and the nasal spray is made of the live virus.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            The <b>hepatitis B vaccine</b> is given to prevent severe infections
            of the liver. These infections can be more serious, and even fatal,
            among people who are taking anti-TNF medicines. This vaccine is now
            a part of the routine childhood shots. It is a good idea for
            everyone with IBD to get it because an anti-TNF medicine may be
            needed in the future. You need three (3) shots over 6 months for the
            vaccine to work. It often comes in a form that combines both
            hepatitis A and hepatitis B vaccines in a single shot (although it
            is still three [3] shots total). This vaccine is inactivated and
            safe to get while taking immunosuppressive medicines.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            The <b>human papilloma virus (HPV) vaccine</b> (Gardasil® and
            Cervarix®) is recommended for young women between ages 11 and 26 to
            reduce their risk for cervical cancer. It is a good idea for young
            women with IBD to have this vaccine because taking an
            immunosuppressive medicine can increase your risk of HPV infection.
            A total of three (3) shots are required over 6 months for the
            vaccine to work. This vaccine is inactivated and safe to get while
            taking immunosuppressive medicines.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Chickenpox and shingles</b> are caused by the same virus –
            varicella zoster. This virus lives on in the body after chickenpox
            and can occur again as shingles. Having the vaccine for both
            chickenpox and shingles is advised for adults. However, because
            these vaccines are made of the live virus, they are not safe for
            someone who is taking immunosuppressive medicines. It is best to
            have one of these vaccines at least 2 months after stopping an
            immunosuppressive medicine, and to not start taking
            immunosuppressive medicine for about 2 months after having one of
            these shots.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Injectable polio vaccine</b> is not a live virus, and will not
            cause polio. This vaccine is advised for children. The oral form is
            a live vaccine and is not considered safe for people who take
            immunosuppressive medicines.
          </div>
        </div>
        <hr />
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Vaccination plan</b>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Childhood:</b> MMR, polio, rotavirus, Hib, TdaP, chickenpox, and
            hepatitis A and B long before immune suppressed
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Adolescence:</b> meningitis, TdaP, hepatitis B, and Gardasil (for
            females).
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>At diagnosis of IBD:</b> flu shot. If immunosuppressive medicine
            is not needed right away, consider pneumonia vaccine and shingles
            vaccine.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            Smoking and Inflammatory Bowel Disease
            <a href="https://www.crohnsandcolitis.org.uk/about-crohns-and-colitis/publications/smoking-and-ibd#:~:text=Many%20studies%20have%20shown%20that,carries%20many%20other%20health%20risks.">
              {" "}
              <h9>IBD and Smoking</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Preventing Colon Cancer</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            Some people with IBD have a slightly higher risk for colon cancer
            than those without IBD. The exact risk is not known, but new studies
            suggest that the risk is lower than had been thought in the past.
            Not everyone with IBD has the same risk for colon cancer. Having a
            colonoscopy as often as advised can help to detect early signs of
            cancer or pre-cancer, when it can be treated most easily. Everyone
            with IBD in the colon requires a colonoscopy starting 8 years after
            the first symptoms of IBD, and then every 1 to 2 years.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <hr />
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Understanding your risk for colon cancer:</b>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● People with ulcerative colitis have an increased risk for colon
            cancer 8 to 10 years after diagnosis.
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● People with a limited form of ulcerative colitis that involves
            just the rectum do not have an increased risk for colon cancer.
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● Taking your IBD medicines regularly can help to decrease your
            risk. IBD medicines help reduce your symptoms and also decrease the
            risk for colon cancer.
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● Some medicines, supplements, and vitamins can have a
            “chemopreventive” effect, meaning that they protect a person from
            getting cancer. No medicine, supplement, or vitamin has been
            definitely shown to prevent cancer, but several show promise. These
            include IBD medicines related to mesalamine (Asacol®, Pentasa®,
            Lialda®, Colazal®, Azulfidine®) and folate (also called folic acid).
            Ask your doctor about new advances in this area.
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● If you have Crohn’s disease with inflammation in your colon you
            may be at increased risk for colon cancer. The most common type of
            Crohn’s disease is when it occurs only in the last part of the small
            intestine (the terminal ileum) and does not increase the risk for
            colon cancer.
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            ● Ask your doctor if you have an increased risk of colon cancer
            because you have IBD.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Sexual Health and Inflammatory Bowel Disease</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>
              Can I have a normal sex life if I have Crohn’s disease or
              ulcerative colitis?
            </b>
            Sexual health is an important part of your overall health and
            quality of life. Crohn’s disease and ulcerative colitis can affect
            your sexual health. When the disease is active, you may feel very
            tired and have little desire for sex. Major abdominal or pelvic
            surgery (for example, removal of the colon) increases the risk for
            erectile dysfunction (impotence), which means not being able to have
            or keep an erection. Surgery can also affect body image and how a
            person feels about their desirability. Some people with Crohn’s
            disease develop a fistula. If it is an anal fistula, intercourse can
            be painful. Please talk to your doctor if you are concerned about
            any of these issues.
            <br></br>
            <br></br>A sexually transmitted disease (STD) can make it harder to
            treat IBD. For example, if you get genital herpes while you are
            taking an immunosuppressive medicine, you may have to stop taking
            the medicine until the herpes is treated. Women with IBD who are
            taking an immunosuppressive medicine may have a higher risk for
            infection with the human papilloma virus (HPV). Many people are
            exposed to HPV, and in some women it causes cervical cancer. In
            addition to a yearly PAP test (PAP smear) and getting the HPV
            vaccine, always use condoms to protect yourself from STDs. Overall,
            when treated, patients with IBD have happy and healthy sexual
            activity. Treatment of your condition leads to increased energy
            level and interest in intimacy.
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>
              Fertility, Pregnancy, and Breast-feeding with Inflammatory Bowel
              Disease
            </h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen6(!open6)}
              aria-controls="example-collapse-text"
              aria-expanded={open6}
              className="faq-box"
            >
              <b>
                Can I have a baby if I have Crohn’s disease or ulcerative
                colitis?
              </b>
            </Button>
            <Collapse in={open6}>
              <div id="example-collapse-text">
                Yes, most women who have IBD are able to get pregnant and carry
                a baby to term. Having IBD does not reduce the chances you will
                get pregnant. The effect of IBD on pregnancy depends on how
                severe the disease was before and during pregnancy. If the
                disease is in remission at the time the baby is conceived it
                will likely stay in remission during pregnancy. If your IBD is
                well controlled, you can expect to have a normal pregnancy.
                Women with more severe IBD have a greater risk of early delivery
                and of having a baby with low birth weight. This stresses the
                need for continued excellent control of IBD during pregnancy
                (see below).
                <br></br>
                <br></br>
                Major abdominal or pelvic surgery increases the risk of not
                being able to get pregnant and may affect a woman’s ability to
                carry a pregnancy to term. The most common problem is caused by
                the growth of scar tissue that blocks the fallopian tubes. If
                this occurs, in vitro fertilization may be an option. In men,
                major abdominal or pelvic surgery increases the risk for
                erectile dysfunction. Sulfasalazine, a common medicine used to
                treat IBD, causes a decrease in sperm count and fertility in 10%
                of men who take it. If you are taking sulfasalazine and your
                partner is having a hard time becoming pregnant, talk to your
                doctor about switching to another 5-ASA medicine. The sperm
                count will return to normal when the sulfasalazine is stopped.
                <br></br>
                <br></br>
                Many medications can be used during pregnancy, however you
                should talk to your doctor about how medications will impact
                your pregnancy, fetus, or delivery prior to trying to conceive
                or when you realize you are pregnant. ONE MAJOR EXCEPTION is
                METHOTREXATE. You must not use methotrexate when trying to
                become pregnant or when you are pregnant. This medication is
                clearly linked to spontaneous abortion and severe birth defects.
                You should use two methods of contraception when using
                methotrexate to avoid unintentionally becoming pregnant.
                Methotrexate should be stopped 6 months prior to attempting to
                become pregnant.
                <br></br>
                <br></br>
                It is not known if the risk for birth defects is higher if a man
                is taking azathioprine when his partner becomes pregnant. Both
                men and women should talk to their doctor about this risk before
                starting to take azathioprine.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen7(!open7)}
              aria-controls="example-collapse-text"
              aria-expanded={open7}
              className="faq-box"
            >
              <b>
                How can I make sure my IBD is well controlled before I get
                pregnant?
              </b>
            </Button>
            <Collapse in={open7}>
              <div id="example-collapse-text">
                The best way to control your disease is to get regular care from
                your health care team and take your medicines faithfully and in
                the prescribed doses. Tell to your doctor about your symptoms
                and any side effects, so you can work together to find the best
                treatment that works for you. If your IBD is not treated using
                your maintenance medicines, the inflammation can get out of
                control very quickly. This increased inflammation causes your
                disease to get worse and you will have symptoms such as
                diarrhea, blood or mucous in the stool, and abdominal pain. If
                you have ever had a flare of your disease, you know these
                symptoms. Many people lose their appetite and are unable to gain
                or even maintain a healthy weight when they have these symptoms.
                Or, because they associate food with painful bowel movements or
                increased diarrhea, they stop eating. This is a big concern if
                you get pregnant during a disease flare. If you are not able to
                take in enough calories, your baby will not grow as it should.
                IBD that is not controlled may cause fistulas, abscesses, and
                perforations. These are severe and need special treatment and
                maybe even surgery. Surgery during pregnancy may harm both the
                mother and her baby.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen8(!open8)}
              aria-controls="example-collapse-text"
              aria-expanded={open8}
              className="faq-box"
            >
              <b>
                Will I have to go to the doctor more often when I am pregnant?
              </b>
            </Button>
            <Collapse in={open8}>
              <div id="example-collapse-text">
                If you are taking immunosuppressive medicines or having disease
                flares while you are pregnant, you will need to see your
                obstetrician and IBD doctor more often. Your baby’s growth will
                be closely monitored by your obstetrician with ultrasound scans
                over the course of your pregnancy.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen9(!open9)}
              aria-controls="example-collapse-text"
              aria-expanded={open9}
              className="faq-box"
            >
              <b>Will my IBD get worse when I am pregnant?</b>
            </Button>
            <Collapse in={open9}>
              <div id="example-collapse-text">
                IBD does not always get worse during pregnancy. Women whose IBD
                is in remission when they get pregnant are likely to stay in
                remission. Women with active disease when they get pregnant are
                likely to have active disease during pregnancy. Therefore, many
                women try to conceive only when they are in remission. Some
                women notice their symptoms improve while they are pregnant.
                This is due to changes that occur in the mother’s immune system
                so that her immune system will not attack the baby, which is
                made of foreign cells. Remember, experts believe that the key
                problem in IBD is that the body’s immune system fails to “turn
                off,” which leads to unchecked inflammation. As a result, many
                women with IBD seem to get better from the “turning off” of the
                immune system that normally happens in pregnancy. Some women
                have flares shortly after giving birth when the immune system
                returns to normal. Of course, symptoms do not improve for every
                pregnant woman with IBD.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen10(!open10)}
              aria-controls="example-collapse-text"
              aria-expanded={open10}
              className="faq-box"
            >
              <b>
                Should I keep taking my medicines for IBD while I am trying to
                get pregnant of if I become pregnant?
              </b>
            </Button>
            <Collapse in={open10}>
              <div id="example-collapse-text">
                You will do better if your disease is under control before and
                during pregnancy. Most medicines used to treat IBD are generally
                safe to take during pregnancy. Therefore, it is a good idea to
                keep taking the medicines to treat your IBD while you are
                pregnant. Stopping a medicine that is working to control your
                disease can make your IBD worse. A flare during pregnancy is a
                big risk to you and your growing baby. One of the things to
                think about is whether the effects of a flare are worse than the
                risk of side effects from the medicines. You and your doctor
                need to talk about the risks and benefits of using medicines
                during pregnancy before you try to get pregnant. If you find out
                you are pregnant, don’t stop your IBD medicines. Call your
                doctor right away to discuss whether you should keep taking your
                medicines. Methotrexate is the only medicine that you absolutely
                cannot take during pregnancy.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen11(!open11)}
              aria-controls="example-collapse-text"
              aria-expanded={open11}
              className="faq-box"
            >
              <b>Will IBD medicines harm my baby?</b>
            </Button>
            <Collapse in={open11}>
              <div id="example-collapse-text">
                The U.S. Food and Drug Administration decides the safety level
                of drugs taken during pregnancy. Category A includes medicines
                like Tylenol®, which have been shown to be of very low risk to
                the baby during pregnancy. Category B medicines are the next
                safest medicines to take. These are generally considered very
                low risk to the baby during pregnancy. Category C means there
                are no studies to show if the medicine is safe or not safe to
                take during pregnancy. However, the benefits of taking the
                medicine often outweigh the risks of not taking the medicine.
                Category D means that there is some proof that the drug causes
                problems during pregnancy. However, the benefit of taking the
                medicine may still outweigh the risk of not taking the medicine.
                Category X means the drug should<b> ABSOLUTELY NOT</b> be taken
                during pregnancy and should be stopped for several months before
                getting pregnant.
                <br></br>
                <br></br>
                Examples of category B drugs used to treat IBD include
                sulfasalazine (Azulfidine®) and mesalamine (Asacol®, Canasa®,
                Lialda™, Pentasa®, Rowasa®).
                <br></br>
                <br></br>
                Infliximab (Remicade®), is also category B, and has been safely
                used in pregnancy and during conception. Large studies are
                underway to determine whether Remicade, Humira, Cimzia, and
                other anti-TNF agents need to be stopped during pregnancy. Many
                patients with moderate to severe IBD continue on these
                medication throughout the entire pregnancy with good outcomes
                for themselves and their growing baby.
                <br></br>
                <br></br>
                Infliximab (Remicade®), is also category B, and has been safely
                used in pregnancy and during conception. Large studies are
                underway to determine whether Remicade, Humira, Cimzia, and
                other anti-TNF agents need to be stopped during pregnancy. Many
                patients with moderate to severe IBD continue on these
                medication throughout the entire pregnancy with good outcomes
                for themselves and their growing baby.
                <br></br>
                <br></br>
                Azathioprine (Imuran®) and 6-mercaptopurine (Purinethol®) are
                category D drugs. While the official ruling by the FDA is that
                these drugs are not recommended during pregnancy, they have been
                used by large groups of people and found to be of very little
                risk. These groups include people with kidney transplants,
                autoimmune liver disease, and IBD. These medicines are used
                throughout pregnancy to stay in remission and control symptoms.
                If you do not feel okay about taking these medicines, talk with
                your doctor. Together you will come up with the best and safest
                plan for you and your baby.
                <br></br>
                <br></br>
                Methotrexate is Category X and that means that this drug should
                <b> NEVER</b> be used during pregnancy or the 6 months before
                trying to become pregnant. There is a very large risk for birth
                defects if you use methotrexate during pregnancy. Special safety
                measures are always needed when using methotrexate during
                childbearing years. Double contraception is required while
                taking this medicine. This means that{" "}
                <b> both the man and the woman </b>
                need to use birth control. For example, condoms are used by the
                man and birth control pills or an IUD are used by the woman.
                This is also true for couples when only the man is taking
                methotrexate, because this drug can affect the sperm. Men who
                take methotrexate should also stop taking the medicine 6 months
                before trying to conceive with their partner.
                <br></br>
                <br></br>
                Women with IBD often need antibiotics during pregnancy. Two
                common antibiotics are metronidazole (Flagyl®), a category B
                drug, and ciprofloxacin (Cipro®), a category C drug.
                Metronidazole is generally used during pregnancy instead of
                ciprofloxacin.
                <br></br>
                <br></br>
                Diphenoxylate plus atropine (Lomotil®), a drug often used for
                diarrhea, is considered category C and should not be taken
                during conception and pregnancy. Loperamide (Imodium®), which is
                also used to treat diarrhea, is considered a safer choice
                because it is a category B drug.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen12(!open12)}
              aria-controls="example-collapse-text"
              aria-expanded={open12}
              className="faq-box"
            >
              <b>Can I breast-feed my baby while taking my IBD medicines?</b>
            </Button>
            <Collapse in={open12}>
              <div id="example-collapse-text">
                Some IBD medicines are safe to continue while breast-feeding.
                These include mesalamine, sulfasalazine, and prednisone. Talk to
                your doctor if you are taking azathioprine, 6- mercaptopurine,
                or anti-TNF medicines and plan to nurse your infant.
                Methotrexate is NEVER to be taken while breast-feeding. It may
                be better for you and your baby to continue your medicines and
                bottle-feed your baby.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-left ">
            <Button
              type="button"
              onClick={() => setOpen13(!open13)}
              aria-controls="example-collapse-text"
              aria-expanded={open13}
              className="faq-box"
            >
              <b>What if I get somebody else pregnant?</b>
            </Button>
            <Collapse in={open13}>
              <div id="example-collapse-text">
                Methotrexate is a medication that could cause a temporary
                increased chance of infertility and low sperm count in men.
              </div>
            </Collapse>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Genetic Risk for Inflammatory Bowel Disease in Childbearing</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Will my children get IBD?</b>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            Experts are still trying to figure out the exact cause of IBD. At
            this time there seems to be more than one cause. Your genes may play
            a role, and also other things such as infection. If you have Crohn’s
            disease, the risk that your child will develop Crohn’s disease is
            about 5%. If you have ulcerative colitis, the risk that your child
            will develop ulcerative colitis is about 2% to 8%. This means that
            although your children are at a higher risk for IBD than the general
            public, they are not likely to develop IBD. If your child has
            symptoms of IBD or is not growing as expected, tell your child’s
            doctor that you have IBD.
          </div>
        </div>
        <hr />
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Mental health and Wellness</b>
            <a href="https://www.crohnscolitisfoundation.org/mental-health">
              {" "}
              <h9>Mental Health and IBD Resource</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <hr />
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Talking to a medical professional</b>
            <a href="https://www.crohnscolitisfoundation.org/mental-health/talking-to-your-healthcare-team">
              {" "}
              <h9>Medical Professional Contact</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            Clinical Psychologist at UF:
          </div>
          <div className="col-sm-12 text-left">Dr. Lori Waxenberg</div>
          <div className="col-sm-12 text-left">
            E-mail: lwaxenbe@phhp.ufl.edu
          </div>
          <div className="col-sm-12 text-left">Office: 352-273-5273</div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            Clinical Psychologist at UM:
          </div>
          <div className="col-sm-12 text-left"></div>
          <div className="col-sm-12 text-left">E-mail:</div>
          <div className="col-sm-12 text-left">Office:</div>
        </div>
        <hr />
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Stress management </b>
            <a href="https://www.crohnscolitisfoundation.org/mental-health/coping-strategies-for-better-mental-health">
              {" "}
              <h9>Mental Health and IBD Resource</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <hr />
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>Support group</b>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            For information about IBD support groups at the University of
            Florida and University of Miami, please click one of the links
            below.
          </div>
          <div className="col-sm-12 text-left">
            University of Florida Support Group:
            <a href="https://gastroliver.medicine.ufl.edu/ibd/ibd-patient-info/uf-student-ibd-support-system/">
              {" "}
              <h9>UF IBD Support Group</h9>
            </a>
          </div>
          <div className="col-sm-12 text-left">
            University of Miami Support Group:
            <a href="https://www.crohnscolitisfoundation.org/chapters/florida/support-groups/ccfa-support-group-miami-fl-UM">
              {" "}
              <h9>CCFA UM Support Group</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>COVID-19 Resources</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <b>COVID-19 Risk Calculator: </b>
            <a href="http://shiny.bios.unc.edu/secure-ibd-risk-calc/">
              {" "}
              <h9>COVID-19 Risk Calculator</h9>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
/* 
<div className="spacer" > &nbsp; </div>

<div className="container">
  <div className="row">
    <div className="col-xs-3"></div>
    <div className="col-xs-9"></div>
  </div>
  <div className="row">
    <div className="col-*-*"></div>
    <div className="col-*-*"></div>
    <div className="col-*-*"></div>
  </div>
  <div className="row">
    ...
  </div>
</div>
*/
export default health;
