import React from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import ResearchProject from '../components/ResearchProject/ResearchProject';

import { projects } from '../resources/researchdata.js';


import styles from './Research.module.css';

class Research extends React.Component {

    componentDidMount() {
        document.title = "Research | Jadesola Bejide";
        this.fillProjects();
    }

    fillProjects() {
        let cards = [];

        projects.forEach(r => {
            cards.push(<ResearchProject name={r.title} url={r.link} code={r.code} info={r.descr} topics={r.topics.join(", ")}  className={styles.projectCard} />); 
        });

        const container = document.getElementById('container');
        const root = createRoot(container);

        root.render(cards);
    }


    render() {
        return(
            <div className={styles.container}>
                <Navigation links={this.props.links} />
                <h1>Research Projects, Essays and Reports</h1>
                <main id="container" className={styles.projects}>

                </main>
                <Footer />
            </div>

        )
    }
}

export default Research;