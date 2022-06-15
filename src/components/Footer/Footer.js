import React from 'react';

import styles from './Footer.module.css';

class Footer extends React.Component {
    

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <span>This website was created by Jadesola Bejide</span>
                <p>All rights reserved ©</p>
            </footer>
        )
    }
}

export default Footer;