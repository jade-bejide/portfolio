import React from 'react';

import styles from './ResearchProject.module.css';

class ResearchProject extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div className={styles.projectCard}>
                
                { console.log(this.props) }
                <h2>{this.props.name}</h2>
                <div  className={styles.cardLinks}>
                    {(this.props.url !== "" && this.props.url !== null) ? <a href={this.props.url} className={styles.projLnk} alt="view research paper/report" target="_blank" rel="noreferrer"><button className={styles.btn}>Paper</button></a> : <span></span>}
                    {(this.props.code !== "" && this.props.code !== null) ?<a href={this.props.code} className={styles.projLnk} alt="view research paper/report" target="_blank" rel="noreferrer"><button className={styles.btn}>Code</button></a> : <span></span>}
                    {/* {(this.props.link !== "" && this.props.link !== null) ?<a href={this.props.link} className={styles.projLnk} alt="view research paper/report" target="_blank" rel="noreferrer"><button className={styles.btn}>Link</button></a> : <span></span>} */}
                </div>

                <p className={styles.projInfo}>{this.props.info}</p>
                <br />
                <p id="type"><strong>Type: </strong> {this.props.type}</p>
                {/* <p id="grades"><strong>Grade:</strong> {this.props.grade}</p> */}
                <p id="topics"><strong>Research Topics:</strong> {this.props.topics}</p>
            </div>
        )
    }


}

export default ResearchProject;