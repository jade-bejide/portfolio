import React from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Course from '../components/Course/Course';

import { courses } from '../resources/courses.js';


import styles from './Courses.module.css';

class Courses extends React.Component {

    componentDidMount() {
        document.title = "Honours | Jadesola Bejide";
        this.fillCourses();
    }

    fillCourses() {
        let cards = [];

        courses
        .sort((a, b) => a.link.localeCompare(b.link))
        .sort((a, b) => a.status.localeCompare(b.status))
        
        .forEach(r => {
            cards.push(<Course name={r.title} url={r.link} status={r.status} info={r.descr} className={styles.projectCard} />); 
        });

        const container = document.getElementById('container');
        const root = createRoot(container);

        root.render(cards);
    }


    render() {
        return(
            <div className={styles.container}>
                <Navigation links={this.props.links} />
                <h1>Honours</h1>
                <main id="container" className={styles.projects}>

                </main>
                <Footer />
            </div>

        )
    }
}

export default Courses;