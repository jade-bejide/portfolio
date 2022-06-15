import React from 'react';
import profile from '../../images/profile.JPG';
import instagram from '../../images/contacts/ig.svg';
import github from '../../images/contacts/github.png';
import email from '../../images/contacts/email.png';
import linkedin from '../../images/contacts/lin.png';

import styles from './ContactCard.module.css';

class ContactCard extends React.Component {

    constructor(props) {
        super(props);
    }


    
    render() {
        return (
            <section>
                <img src={profile} id={styles.profileImg} alt="My Headshot"/>
                <h2>Jadesola Bejide</h2>
                <div>Aspiring Fullstack Engineer and Machine Learning Engineer</div> 
                <span className={styles.contacts}>
                    {/* <a href=<img src={instagram} /> */}
                    <a href="http://www.github.com/jade-bejide" target="_blank" rel="noreferrer"><img src={github}  alt="GitHub" /></a>
                    <a href="mailto:jadebejde@gmail.com" target="_blank" rel="noreferrer" ><img src={email} alt="Email Me"/></a>
                    <a href="http://linkedin.com/in/jadesolabejide" target="_blank" rel="noreferrer" ><img src={linkedin} alt="Connect on LinkedIn"/></a>

                </span>
            </section>
        )
    }
}

export default ContactCard;