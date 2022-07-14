import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../resources/Jadesola Bejide Resume.pdf';
import styles from './Navigation.module.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Navigation extends React.Component {

    state = {
        collapsed: false
    }


    constructor(props) {
        super(props);
        this.collapseNav = this.collapseNav.bind(this);
    }

    collapseNav() {
        var x = document.getElementById("topNavi");
        if (this.state.collapsed == false) {
            this.setState({collapsed: true});
            
            x.classList.add(styles.responsive);
        }
        else {
            x.classList.remove(styles.responsive);
            this.setState({collapsed: false});
        }
    }

    render() {
        return (
            <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                
                <nav className={styles.topNav} id="topNavi">

                        <h1 className={styles.navTitle}>Jadesola Bejide</h1>
                        <div className={styles.navLinks}>
                            {/* <a href={this.props.links.blog}><button>Blog</button></a> */}
                            <Link to='/' replace className={styles.navLink}><button className={styles.navBtn}>Home</button></Link>
                            <Link to='/projects' replace className={styles.navLink}><button className={styles.navBtn}>Projects</button></Link>
                            <Link to='/' replace className={styles.navLink}><button className={styles.navBtn}>Research</button></Link>
                            <a href={resume} target="_blank" rel="noreferrer" className={styles.navLink}><button className={styles.navBtn} alt="Jadesola Bejide's CV">CV</button></a> 
                            <a href={window.location} className={styles.icon} onClick={this.collapseNav}>
                                <i className="fa fa-bars"></i>
                            </a>
                        </div>

                </nav>
            </>
        )
    }
}

export default Navigation;

{/* <nav>
<h1 className={styles.navTitle}>Jadesola Bejide</h1>
<div className={styles.navLinks}> */}
    {/* <a href={this.props.links.blog}><button>Blog</button></a> */}
//     <Link to='/' replace className={styles.navLink}><button className={styles.navBtn}>Home</button></Link>
//     <Link to='/projects' replace className={styles.navLink}><button className={styles.navBtn}>Projects</button></Link>
//     <a href={resume} target="_blank" className={styles.navLink}><button className={styles.navBtn} alt="Jadesola Bejide's CV">CV</button></a> 
// </div>

// </nav>