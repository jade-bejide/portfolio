import React from 'react';

import styles from './About.module.css';

var bristol = "https://www.bristol.ac.uk/study/undergraduate/2023/computer-science/bsc-comp-sci/";
var edinburgh = "https://www.ed.ac.uk/studying/postgraduate/degrees?id=107&r=site/view";
var haskell = "https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa?unitCode=COMS10016";
var softtools = "https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa?unitCode=COMS10012";
var css = "https://cssbristol.co.uk/about/";
var tradedesk = "https://www.thetradedesk.com/us";


class About extends React.Component {

    render() {
        return (
            <main className={styles.info}>
                {/* <span className={styles.skills}><h2>Technology Stack: </h2><p>ReactJS, FastAPI / SpringBoot, MySQL</p></span>
                <br></br>
                <span className={styles.skills}><h2> Databases: </h2><p>MySQL, MongoDB</p></span> */}
                {/* <br /> */}
                <span className={styles.skills}><h2>Research Interests: </h2><p>Social Recommendation Systems; Speech & Language Technology for Low-resource Languages.</p></span>
                <br /><br />
                <span className={styles.skills}><h2>Software Development Interests: </h2><p>Recommendation Algorithms; Natural Language Processing; Machine Learning Pipelines</p></span>

                <h2>About Me</h2>
                <div className={styles.descr}>
                    <p>I am a MSc Artificial Intelligence student, studying at the University of Edinburgh. I graduated from the University of Bristol with a degree in Computer Science with First Class Honours.</p>
                        {/* In September 2024, I will begin my masters in Artificial Intelligence at the <a href={edinburgh} target="_blank"  rel="noreferrer" className={styles.extLink}><button className={styles.btn}>University of Edinburgh.</button></a></p> */}
                        <br /><br />
                        <p>I have industry experience in backend development for Big Data Processing via two summer internships (Amazon Prime, 2023; The Trade Desk, 2024) and I am interested in Machine Learning / Data Science / Software Engineering roles which apply ML and/or probabilistic models in Big Data pipelines.</p>
                    {/* <p>  In the 2022-23 academic year I was Treasurer of <a href={css} target="_blank" rel="noreferrer" className={styles.extLink}><button className={styles.btn}>CSS Bristol</button></a> and RoboGals Bristol. I was also a teaching assistant for <a href={haskell} target="_blank"  rel="noreferrer" className={styles.extLink}><button className={styles.btn}>COMS10016</button></a> (Functional Programming with Haskell) and <a href={softtools} target="_blank"  rel="noreferrer" className={styles.extLink}><button className={styles.btn}>COMS10012</button></a> (Software Tools).</p> */}
                    <br /><br />
                    {/* <p>I am looking to become a research assistant for a Natural Language Processing academic researcher during term time. My current interests involve the personalisation of multilingual language models based on different vernaculars and I am hope to gain mentorship from a researcher currently reading similar topics.</p> */}
                </div>
            </main>
        )
    }
}

export default About;