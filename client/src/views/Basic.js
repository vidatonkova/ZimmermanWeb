import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Collapse } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Format.css";
/*
import Col from "react-bootstrap/Col"
*/

const Basic = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  return (
    <div>
      <div class="container">
        <div class="row topSpace-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h2>Basic IBD Information</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <h3><b>What is Inflammatory Bowel Disease?</b></h3>
          </div>
          <div className="col-sm-12 text-left">
            <h9>
              Inflammatory bowel diseases are a collection of conditions causing
              chronic inflammation primarily affecting the small intestine
              and/or colon (also known as the large intestine). The cause of IBD
              is not completely understood, but is believed to be related to a
              combination of genetic, bacterial (microbiome), and immune system
              factors. Current theories suggest that individuals with IBD have
              an immune system that has developed an aggressive response to
              innocuous intestinal bacteria. Several genes have been linked to
              an increased risk or severity of IBD, however no single gene is
              clearly causative. While the most common area of involvement is
              the intestines, other regions including the skin, joints, and eyes
              can be affected by IBD.
            </h9>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <hr />
        <div class="row entrySpacer-row"></div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <h3><b>There are three different types of inflammatory bowel disease.</b></h3>
          </div>
          <div className="col-sm-12 text-left">
            <h9>1. Ulcerative colitis affects only the colon.</h9>
          </div>
          <div className="col-sm-12 text-left">
            <h9>
              2. Crohn’s disease most often affects the end of the small
              intestine, but it can affect any region.
            </h9>
          </div>
          <div className="col-sm-12 text-left">
            <h9>
              3. Indeterminate colitis is when features of both Crohn’s disease
              and UC are present.
            </h9>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entrySpacer-row"></div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen1(!open1)}
              aria-controls="example-collapse-text"
              aria-expanded={open1}
              className="faq-box"
            >
              <h4><b>What is ulcerative colitis (UC)?</b></h4>
            </Button>
            <Collapse in={open1}>
              <div id="example-collapse-text">
                <h9>
                <div class="row in-button-spacer"></div>
                Ulcerative colitis starts in the rectum and can affect the
                entire colon or only part of it. It may be called proctitis if
                only the rectum is affected and left-sided colitis if only the
                lower half of the colon is affected. If most of the colon is
                affected, it may be called pancolitis. The inflammation is
                continuous, which means that it does not stop and then start
                again in a different part of the colon. The inflammation is
                chronic, which means that it is always present, although the
                symptoms may come and go. Further, the inflammation is limited
                to the superficial layers of the colon, helping to separate UC
                from Crohn’s disease. Inflammation can spontaneously increase,
                often unpredictably, leading to an increase in symptoms that are
                commonly called “flares.” Ulcerative colitis is different from
                irritable bowel syndrome, infectious colitis, and ischemic
                colitis because it is caused by chronic immune-mediated
                inflammation.
                </h9>
              </div>
            </Collapse>
          </div>
        </div>

        <div class="row between-button-spacer"></div>

        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="faq-box"
            >
              <h4><b>What is Crohn’s disease (CD)?</b></h4>
            </Button>
            <Collapse in={open2}>
              <div id="example-collapse-text">
                <div class="row in-button-spacer"></div>
                <h9>Crohn’s disease can affect any part of the digestive tract:
                mouth, esophagus, stomach, proximal (duodenal and jejunal) or
                distal (ileum) small intestine or the colon. The most common
                area affected is at the end of the small intestine, the terminal
                ileum. The inflammation usually occurs in segments, with healthy
                segments in between inflamed segments. This patchy, “skip
                lesion” behavior of Crohn’s disease is different than UC. In
                addition, Crohn’s disease can affect deep layers of the
                intestine, further distinguishing it from UC. It is called
                Crohn’s ileitis when only the ileum is affected. It is called
                Crohn’s colitis when only the colon is affected. And it is
                called Crohn’s ileocolitis when both the ileum and the colon are
                affected.</h9>
              </div>
            </Collapse>
          </div>
        </div>
        
        <div class="row between-button-spacer"></div>      

        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="faq-box"
            >
              <h4><b>What is indeterminate colitis?</b></h4>
            </Button>
            <Collapse in={open3}>
              <div id="example-collapse-text">
                <div class="row in-button-spacer"></div>
                <h9>Indeterminate colitis also only affects the colon, but it is not
                the same as ulcerative colitis. IBD may be called indeterminate
                colitis when the biopsy cells under the microscope look more
                like cells from a person with ulcerative colitis, but with the
                naked eye the inflammation in the colon looks more like that of
                Crohn’s disease. Remember, inflammation in Crohn’s disease is
                more likely to affect isolated segments of the colon, rather
                than continuous stretches of the colon, as happens in ulcerative
                colitis. Also, in Crohn’s disease the ulcerations can look deep
                and long.</h9>
              </div>
            </Collapse>
          </div>
        </div>
        
        <div class="row between-button-spacer"></div>

        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen4(!open4)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="faq-box"
            >
              <h4><b>Who is at most risk of getting IBD?</b></h4>
            </Button>
            <Collapse in={open4}>
              <div id="example-collapse-text">
                <div class="row in-button-spacer"></div>
                <h9>All types of IBD affect men and women equally. It can occur at
                any age, but often starts between the ages of 15 to 25. Crohn’s
                disease is more common among people who have a family history of
                the disease, though the change of having Crohn’s if a parent or
                sibling has Crohn’s is approximately 5-10%. Ulcerative colitis
                affects about 600,000 people in the United States; Crohn’s
                disease affects about 700,000 people. Diet clearly impacts the
                symptoms of IBD but does not cause IBD nor does it impact
                intestinal inflammation. Despite the inability to control
                inflammation with diet alone, dietary modifications can
                substantially improve symptoms of diarrhea, abdominal pain, gas,
                and bloating that are common in IBD.</h9>
              </div>
            </Collapse>
          </div>
        </div>
        
        <div class="row between-button-spacer"></div>

        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen5(!open5)}
              aria-controls="example-collapse-text"
              aria-expanded={open5}
              className="faq-box"
            >
              <h4><b>What are the symptoms of IBD?</b></h4>
            </Button>
            <Collapse in={open5}>
              <div id="example-collapse-text">
                <div class="row in-button-spacer"></div>
                <h9>People with IBD tend to have flares with active symptoms and
                periods of remission with no symptoms. The severity of these
                symptoms varies greatly between patients, and they partly depend
                on where the inflammation occurs. Inflammation in the colon
                often causes:
                <br></br>
                <b>● Diarrhea</b>
                <br></br>
                <b>● Bloody stools</b>
                <br></br>
                <b>● Abdominal pain</b>
                <br></br>
                <b>● Urgency (the need to have a bowel movement quickly) </b>
                <br></br>
                <b>
                  ● Tenesmus (frequent urges to have a bowel movement, but
                  passing very little stool).
                </b>
                <br></br>
                <b>● Abdominal pain and cramping</b>
                <br></br>
                In addition to bowel symptoms, you may have other symptoms such
                as:
                <br></br>
                <b>● Severe fatigue</b>
                <br></br>
                <b>● Weight loss</b>
                <br></br>
                <b>● Loss of appetite</b>
                <br></br>
                <b>● Fever</b>
                <br></br>
                <b>● Sore or red eyes</b>
                <br></br>
                <b>● Skin rashes</b>
                <br></br>
                <b>● Joint pain</b>
                </h9>
              </div>
            </Collapse>
          </div>
        </div>
        
        <div class="row between-button-spacer"></div>

        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen6(!open6)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="faq-box"
            >
              <h4><b>What are the complications of IBD?</b></h4>
            </Button>
            <Collapse in={open6}>
              <div id="example-collapse-text">
                <h9>
                <div class="row in-button-spacer"></div>
                <b>● Bowel obstruction:</b> In Crohn’s disease if a stricture
                develops contents may be unable to pass through your intestine,
                this is called an <b> obstruction</b>. Long-term obstruction
                raises the pressure in the part of the intestine upstream of the
                blocked area. This pressure can cause the intestinal wall to
                burst, or
                <b> perforate</b>. This is quite painful and requires immediate
                surgery.
                <br></br>
                <b>● Abscess:</b> In some situations, small perforations are
                able to be contained by the body, however these areas become
                infected and cause an abscess. Abscesses often lead to abdominal
                pain and fever and require urgent attention. When fistulas form
                but are unable to drain, it can also form an abscess
                <br></br>
                <b>● Colon Cancer:</b> Long-term inflammation of the colon can
                lead to precancerous changes called dysplasia; this is different
                from typical colon polyps which occur in everyone. When
                dysplasia is present the risk of developing colon cancer
                increases substantially. For these reasons, patients with UC or
                Crohn’s disease affecting the colon require frequent
                colonoscopies to prevent the development of colon cancer.
                <br></br>
                <b>● Joint and Bone Problems:</b> People with IBD also often
                have decreased vitamin D, which can lead to{" "}
                <b> bone loss (osteopenia or osteoporosis)</b>. In addition, a
                history of high dose steroid use can also accelerate bone loss.
                Therefore, we will periodically have DEXA bone density scans
                performed to assess bone health. Some individuals with IBD will
                develop an inflammatory arthritis of large or small joints; this
                occurs in approximately 15-20% of the IBD population.
                <br></br>
                <b>● Mineral and Vitamin Deficiency:</b> B12-This vitamin is
                important in several body functions and is absorbed at the end
                of the intestine. Therefore, individuals with Crohn’s disease or
                those with resection of the terminal ileum are at risk of B12
                deficiency. B12 can be replaced by monthly injection or daily
                oral supplements. Iron-Iron deficiency is common in IBD and can
                lead to anemia with resulting fatigue. Iron stores are often
                checked in the setting of anemia in IBD. Oral iron is a simple
                and safe means to replete iron however this can cause patient to
                experience an upset stomach. In some situations, repletion with
                IV iron is more beneficial and better tolerated.
                <br></br>
                <b>● Kidney Stones and Gallstones:</b> Crohn’s disease in the
                small intestine increases the risk for kidney stones and
                gallstones. The risk is higher if part of the small intestine
                has been removed. A decreased ability to absorb fat may lead to
                a specific type called oxalate kidney stones. People with an
                ileostomy have no colon and do not develop oxalate kidney
                stones. A low oxalate diet may be helpful for someone who keeps
                getting oxalate kidney stones. To see the oxalate content of
                different foods go to this website:
                <a href="http://www.lowoxalate.info/food_lists/alph_oxstat_chart.pdf">
                  {" "}
                  Food Lists
                </a>
                . Crohn’s disease also lowers the ability to absorb bile salts,
                which can lead to gallstones. Poor absorption of bile salts
                leads to an increase in cholesterol in the bile, which may cause
                gallstones.
                </h9>
              </div>
            </Collapse>
          </div>
        </div>
        
        <div class="row between-button-spacer"></div>

        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen7(!open7)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="faq-box"
            >
              <h4><b>How is IBD diagnosed?</b></h4>
            </Button>
            <Collapse in={open7}>
              <div id="example-collapse-text">
                <h9>
                <div class="row in-button-spacer"></div>
                You will have a complete physical exam. You may need some tests,
                such as blood tests, stool tests, CT or MRI scans, and
                colonoscopy with biopsy. The colonoscopy will look for ulcers or
                inflammation in the intestine. Because most of the treatments
                for IBD have risks, you need to be completely sure that you have
                IBD before it is treated. Your intestinal tissue will be looked
                at very closely under a microscope to be sure you have IBD and
                not an infection or another illness. There is no single perfect
                test to diagnose IBD. Careful interpretation of the results of
                testing by an experienced provider is needed to confirm the
                diagnosis.</h9>
              </div>
            </Collapse>
          </div>
        </div>
        
        <div class="row between-button-spacer"></div>

        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen8(!open8)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="faq-box"
            >
              <h4><b>How are Crohn’s disease and ulcerative colitis treated?</b></h4>
            </Button>
            <Collapse in={open8}>
              <div id="example-collapse-text">
                <h9>
                <div class="row in-button-spacer"></div>
                There is no cure for IBD at this time, although this is an
                important topic of current research. However, treatment are
                improving every year, becoming more effective and safer
                overtime. Long term control of inflammation leads to the best
                outcomes in IBD.
                <br></br>
                <b>● Medicines for inflammation -</b> Most treatments for IBD
                focus on reducing inflammation by reducing the overactivity of
                the immune system. Control of inflammation is the cornerstone of
                all modern treatment of IBD. Even if symptoms are controlled,
                optimal suppression of inflammation is the goal of treatment.
                <br></br>
                <b>● Medicines for symptoms -</b> Until the medicines start
                working by reducing the inflammation, you may take medicines
                that will help ease your symptoms such as cramping, urgency, or
                diarrhea. These medicines are only used when you need them.
                <br></br>
                <b>● Surgery -</b> Surgery is a complementary means of treatment
                in IBD, in many cases working hand- in-hand with medical
                treatments. Modern care for IBD relies on a multidisciplinary
                approach utilizing both medicine and surgery.
                <br></br>
                <b>● Stop smoking -</b> Your treatment will work better if you
                don’t smoke. Outside of using treatments as directed, quitting
                smoking is the next most important intervention that improves
                patients’ outcomes.
                <br></br>
                <b>● Diet -</b> Dietary interventions for IBD can help reduce
                inflammation and improve symptoms. Current research suggests
                that Mediterranean-like diets that are high in omega 3 fatty
                acids and dietary fiber can improve IBD. Nutritionists and
                registered dieticians who are familiar with IBD can also help
                you address weight loss.
                <br></br>
                <b>● Complementary treatment -</b> Herbal, alternative, or
                complementary therapies have not been shown to work in clinical
                studies, nor have they been fully tested. Although some help
                ease symptoms, they usually work only in very mild cases. Ask
                your health care team about the safety and effects of these
                products. Always let your health care team know if you are using
                them. You should not rely on complementary treatments alone to
                manage your IBD.
                </h9>
              </div>
            </Collapse>
          </div>
        </div>
        
        <div class="row between-button-spacer"></div>

        <div class="row entry-row">
          <div class="col-sm-12 text-center ">
            <Button
              type="button"
              onClick={() => setOpen9(!open9)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="faq-box"
            >
              <h4><b>
                What should I know about my IBD to be an informed partner in my
                care?
              </b></h4>
            </Button>
            <Collapse in={open9}>
              <div id="example-collapse-text">
                <h9>
                <div class="row in-button-spacer"></div>
                <b>1.</b> Do you know if you have Crohn’s disease, ulcerative
                colitis, or indeterminate colitis?
                <br></br>
                <b>2.</b> Do you know what part of your intestines is involved?
                <br></br>
                <b>3.</b> Do you know what year you first started having
                symptoms (how long you have had IBD)?
                <br></br>
                <b>4.</b> Do you know if you have had any strictures, fistulas,
                or abscesses in the past?
                <br></br>
                <b>5.</b> Do you know what medicines (i.e. steroids) you have
                taken in the past? Why did you stop taking each one?
                </h9>
              </div>
            </Collapse>
          </div>
        </div>
        
        <div class="row between-button-spacer"></div>
        <hr />
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h1>Didn't answer your question or want to learn more?</h1>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-center">
            <h9>Check out these pages for more information!</h9>
            <Link className="nav-link light-blue" to="/My_Health">
              <h3>MyHealth</h3>
            </Link>
            <Link className="nav-link light-blue" to="/Discussion">
              <h3>Discussion board</h3>
            </Link>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
      </div>
    </div>
  );
};

export default Basic;
