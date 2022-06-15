import React from 'react';
import styles from './Home.module.css';

/* COMPONENTS */
import Navbar from '../Navbar/Navbar';
import ContactCard from '../ContactCard/ContactCard';
import About from '../About/About'
import Footer from '../Footer/Footer';
class Home extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      document.title = "Home"
    }
    
      render() {
        return (
          <>
            <Navbar links={this.props.links}/>
            
            <main className={styles.home}>
              
              <ContactCard className={styles.contact}/>
              <About className={styles.about}/>
              
            </main>
            <Footer />
          </>

        )
        
      }
}

export default Home;