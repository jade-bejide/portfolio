import React from 'react';
import resume from '../../resources/Jadesola Bejide Resume.pdf';
import styles from './Navbar.module.css';

class Navbar extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <h1 className={styles.navTitle}>Jadesola Bejide</h1>
                <div className={styles.navLinks}>
                    <a href={this.props.links.home} className={styles.navLink}><button className={styles.navBtn}>Home</button></a>
                    <a href={this.props.links.projects} className={styles.navLink}><button className={styles.navBtn}>Projects</button></a>
                    <a href={resume} target="_blank" className={styles.navLink}><button className={styles.navBtn}>CV</button></a>
                    {/* <a href={this.props.links.blog}><button>Blog</button></a> */}
                </div>
                
            </nav>
        )
    }
}

export default Navbar;