import React from 'react';
import {
  HashRouter,
  Routes, 
  Route
} from 'react-router-dom';

import styles from './App.module.css';
// import './components/Home/Home.module.css';
// import './components/All.css';
import { Home } from './components';
import Projects from './projects/Projects.js';
import Research from './research/Research';



class App extends React.Component {

  componentDidMount() {
    document.title = "Home"
  }

  state = {
    links: {
      'home': '/portfolio',
      'projects': '/portfolio/projects/'
    }
  }

  render() {
    return(
        <HashRouter basename="/">
          <div>
            <Routes>
              <Route exact path="/" element={<Home links={this.state.links}/>} />
              <Route exact path="/projects" element={<Projects links={this.state.links}/>} />
              <Route exact path="/research" element={<Research links={this.state.links}/>} />
              {/* <Route path="/blog" exact element={<Blog />} /> */}

            </Routes>
          </div>
        </HashRouter>

    );
  }


}

              

export default App;
