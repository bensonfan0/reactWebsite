import React from 'react';
import './App.css';
import Header from './components/header';
import Skills from './components/skills';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Projects from './components/projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className = 'App'>
        <Header/>
      </div>
      <Skills/>
      <div className='rowify'>
        <Sidebar/>
        <Projects/>
      </div>



    </Router>
  );
}

export default App;
