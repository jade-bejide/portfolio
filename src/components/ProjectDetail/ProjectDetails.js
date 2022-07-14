import React from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';

import { projects } from './resources/githubdata.js';

import styles from './Projects.module.css';

class ProjectDetail extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    document.title = this.props.name;
    this.fillProjects();
  }

  render() {
    return(
        <div className={styles.container}>
            <Navigation links={this.props.links}/>
            <h1>{this.props.name}</h1>
            <span>Details</span>
            <br />
            <Footer />
        </div>


    );
  }


}

export default ProjectDetail;