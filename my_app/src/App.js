import React from 'react';
import './App.css';
import Header from './components/header';
import Skills from './components/skills';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Projects from './components/projects';
import CollegeHeader from './components/collegeHeader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// this will give percentage of page scrolled -> "--scroll" is value of percentage scrolled
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight -window.innerHeight));
}, false);


function App() {
  return (
    <Router>
      <Navbar/>
      <div className = 'App'>
      </div>
      <Skills/>
      <div className='rowify'>
        <Sidebar/>
        <div>
        <CollegeHeader/>
        <Projects/> 
        </div>
      </div>



    </Router>
  );
}

export default App;
