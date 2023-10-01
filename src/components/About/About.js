import React from 'react';

import styles from './About.module.css';

var bristol = "https://www.bristol.ac.uk/study/undergraduate/2023/computer-science/bsc-comp-sci/";
var haskell = "https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa?unitCode=COMS10016";
var softtools = "https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa?unitCode=COMS10012";
var css = "https://cssbristol.co.uk/about/";



class About extends React.Component {

    render() {
        return (
            <main className={styles.info}>
                {/* <span className={styles.skills}><h2>Technology Stack: </h2><p>ReactJS, FastAPI / SpringBoot, MySQL</p></span>
                <br></br>
                <span className={styles.skills}><h2> Databases: </h2><p>MySQL, MongoDB</p></span> */}
                {/* <br /> */}
                <span className={styles.skills}><h2>Research Interests: </h2><p>Recommendation Systems; Language Models for low-resource modern languages.</p></span>


                <h2>About Me</h2>
                <div className={styles.descr}>
                    <p>I'm a final year 
                        <a href={bristol} target="_blank"  rel="noreferrer" className={styles.extLink}><button className={styles.btn}>University of Bristol</button></a> Computer Science student on track for a first class degree, with the intention of progressing to study a masters and graduate in 2025.</p>
                        <br /><br />
                        <p>In the Summer of 2023, I did an Software Development Internship at Amazon Prime Video in the field of high performance cloud computing where I was unanimously voted inclined to hire.</p>
                        <br /><br />
                        <p> I am looking for internships in Machine Learning Engineering or Software Engineering for the summer of 2024.</p>
                        <br /><br />
                    {/* <p>  In the 2022-23 academic year I was Treasurer of <a href={css} target="_blank" rel="noreferrer" className={styles.extLink}><button className={styles.btn}>CSS Bristol</button></a> and RoboGals Bristol. I was also a teaching assistant for <a href={haskell} target="_blank"  rel="noreferrer" className={styles.extLink}><button className={styles.btn}>COMS10016</button></a> (Functional Programming with Haskell) and <a href={softtools} target="_blank"  rel="noreferrer" className={styles.extLink}><button className={styles.btn}>COMS10012</button></a> (Software Tools).</p> */}
                    <br /><br />
                    {/* <p>I am looking to become a research assistant for a Natural Language Processing academic researcher during term time. My current interests involve the personalisation of multilingual language models based on different vernaculars and I am hope to gain mentorship from a researcher currently reading similar topics.</p> */}
                </div>
            </main>
        )
    }
}

export default About;