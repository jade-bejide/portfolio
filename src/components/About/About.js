import React from 'react';

import styles from './About.module.css';

var bristol = "https://www.bristol.ac.uk/study/undergraduate/2023/computer-science/bsc-comp-sci/";
var css = "https://cssbristol.co.uk/about/";



class About extends React.Component {

    render() {
        return (
            <main className={styles.info}>
                <span className={styles.skills}><h2>Technology Stack: </h2><p>ReactJS, FastAPI / SpringBoot, MySQL</p></span>
                <br></br>
                <span className={styles.skills}><h2> Databases: </h2><p>MySQL, MongoDB</p></span>
                <br />
                <span className={styles.skills}><h2>Research Interests: </h2><p>Recommendation Systems; Language Models for low-resource modern languages.</p></span>


                <h2>About Me</h2>
                <div className={styles.descr}>
                    <p>I'm a second year 
                        <a href={bristol} target="_blank"  rel="noreferrer" className={styles.extLink}><button className={styles.btn}>University of Bristol Computer Science</button></a> student on track for a first class degree.</p>
                    <p> Aside from my studies, I'm currently Treasurer of <a href={css} target="_blank" rel="noreferrer" className={styles.extLink}><button className={styles.btn}>CSS Bristol</button></a>.</p>
                    <p> I'm currently looking for 2023 Summer Internships in software development or in research.</p>
                </div>
            </main>
        )
    }
}

export default About;