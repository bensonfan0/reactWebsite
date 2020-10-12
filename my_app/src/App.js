import React from 'react';
import './App.css';
import Skills from './components/skills';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Projects from './components/projects';
import CollegeHeader from './components/collegeHeader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// this will give percentage of page scrolled -> "--scroll" is value of percentage scrolled
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight -window.innerHeight));
}, false);


function App() {

  // this is for animation -> duration is time for animation to run
  AOS.init({
    duration: 2000,
  })

  return (
    <Router>
      <Navbar/>
      <div className = 'App'>
      </div>
      <div data-AOS='fade-down'>
      </div>
      <div className='rowify'>
              <div data-AOS='fade-right'>
                <Sidebar/>
              </div>
              <div data-AOS='fade-left'>
                <div>
                  <CollegeHeader/>
                </div>
              <Projects/> 
              </div>
      </div>
    </Router>
  );
}

export default App;
