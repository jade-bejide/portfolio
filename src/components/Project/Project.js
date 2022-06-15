import React from 'react';

import styles from './Project.module.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.createCards();
    // }

    // createCards() {
    //     let cards = document.getElementsByClassName(styles.projectCard);

    //     console.log(cards);

    //     cards.forEach(c => {
    //         c.addEventListener('hover', function() {
    //             let tech = document.getElementById('techStack');
    //             tech.textContent = this.props.tech;
    //         }, false);

    //     })
    // }

    render() {
        return(
            <div className={styles.projectCard}>
                <h2>{this.props.name}</h2>
                <div className={styles.cardLinks}>
                    <a href={this.props.url} className={styles.projLnk} alt="view project" target="_blank" rel="noreferrer"><button className={styles.github}>GitHub Page</button></a>
                    <a className={styles.projLnk} alt="view project" target="_blank" rel="noreferrer"><button className={styles.github}>Learn More</button></a>
                </div>

                <p className={styles.projInfo}>{this.props.info}</p>
                <p id="techStack"></p>
            </div>
        )
    }
}

export default Project;
