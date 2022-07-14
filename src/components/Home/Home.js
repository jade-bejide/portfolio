import React from 'react';
import styles from './Home.module.css';

/* COMPONENTS */
import Navigation from '../Navigation/Navigation';
import ContactCard from '../ContactCard/ContactCard';
import About from '../About/About'
import Footer from '../Footer/Footer';
class Home extends React.Component {

    componentDidMount() {
      document.title = "Jadesola Bejide | Aspiring Machine Learning Engineer"
    }
    
      render() {
        return (
          <>
            <Navigation links={this.props.links}/>
            
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