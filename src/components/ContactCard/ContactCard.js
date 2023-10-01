import React from 'react';
import profile from '../../images/profile.JPG';
import youtube from '../../images/contacts/youtube.png';
import github from '../../images/contacts/github.png';
import email from '../../images/contacts/email.png';
import linkedin from '../../images/contacts/lin.png';

import styles from './ContactCard.module.css';

class ContactCard extends React.Component {
    
    render() {
        return (
            <section>
                <img src={profile} id={styles.profileImg} alt="My Headshot"/>
                <h2>Jadesola Bejide</h2>
                <div>Aspiring Machine Learning Engineer and Fullstack Developer</div> 
                <span className={styles.contacts}>
                    <a href="http://www.github.com/jade-bejide" target="_blank" rel="noreferrer"><img src={github}  alt="GitHub" /></a>
                    <a href="mailto:codedbyjade@gmail.com" target="_blank" rel="noreferrer" ><img src={email} alt="Email Me"/></a>
                    <a href="http://linkedin.com/in/jadesolabejide" target="_blank" rel="noreferrer" ><img src={linkedin} alt="Connect on LinkedIn"/></a>
                    <a href="https://www.youtube.com/channel/UClporuWL0lcwiPh5wG-3Xiw" target="_blank" rel="noreferrer"><img src={youtube}  alt="YouTube" /></a>
                </span>
            </section>
        )
    }
}

export default ContactCard;