import React from 'react';

import styles from './ResearchProject.module.css';

class ResearchProject extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.projectCard}>
                <h2>{this.props.name}</h2>
                <div  className={styles.cardLinks}>
                    <a href={this.props.url} className={styles.projLnk} alt="view research paper/report" target="_blank" rel="noreferrer"><button className={styles.btn}>Paper</button></a>
                    <a href={this.props.code} className={styles.projLnk} alt="view research paper/report" target="_blank" rel="noreferrer"><button className={styles.btn}>Code</button></a>
                    <a className={styles.projLnk} alt="learn more about this project" target="_blank" rel="noreferrer"><button className={styles.btn} onClick={() => {window.open(`mailto:codedbyjade@gmail.com?subject=Enquiry%20About:%20${this.props.name}`);}}>Learn More</button></a>
                </div>

                <p className={styles.projInfo}>{this.props.info}</p>
                <br />
                <p id="topics"><strong>Research Topics:</strong> {this.props.topics}</p>
            </div>
        )
    }


}

export default ResearchProject;