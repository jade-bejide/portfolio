import React from 'react';

import styles from './Course.module.css';

class Course extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.projectCard}>
                <h2>{this.props.name}</h2>
                <div className={styles.cardLinks}>
                    <a href={this.props.url} className={styles.projLnk} alt="view course/certificate" target="_blank" rel="noreferrer"><button className={styles.course}>Link</button></a>
                </div>

                <p className={styles.projInfo}>{this.props.info}</p>
                <p><strong>Status: </strong>{this.props.status}</p>
            </div>
        )
    }
}

export default Course;
