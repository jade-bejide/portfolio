import React from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Project from '../components/Project/Project';

import { projects } from '../resources/githubdata.js';

import styles from './Projects.module.css';

class Projects extends React.Component {

  

  componentDidMount() {
    document.title = "Projects | Jadesola Bejide";
    this.fillProjects();
  }


    fillProjects() {

        let cards = [];

        projects.forEach(r => {
            cards.push(<Project name={r.title} github={r.github} url={r.link} info={r.descr} tech={r.tech_stack.join(", ")} className={styles.projectCard}/>);
        });

        const container = document.getElementById('container');
        const root = createRoot(container);

        root.render(cards);
    }

  render() {
    return(
        <div className={styles.container}>
            <Navigation links={this.props.links}/>
            <h1>Projects</h1> 
            <main id="container" className={styles.projects}>
            
            
            </main>
            <Footer />
        </div>


    );
  }


}

export default Projects;