import React from 'react';

import styles from './Project.module.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.projectCard}>
                <h2>{this.props.name}</h2>
                <div className={styles.cardLinks}>
                    <a href={this.props.url} className={styles.projLnk} alt="view project's github page" target="_blank" rel="noreferrer"><button className={styles.github}>GitHub Page</button></a>
                    <a className={styles.projLnk} alt="view project" target="_blank" rel="noreferrer"><button className={styles.github} onClick={() => {window.open(`mailto:codedbyjade@gmail.com?subject=Enquiry%20About:%20${this.props.name}`);}}>Learn More</button></a>
                </div>

                <p className={styles.projInfo}>{this.props.info}</p>
                <br />
                <p id="techStack"><strong>Technology Stack:</strong> {this.props.tech}</p>
            </div>
        )
    }
}

export default Project;
