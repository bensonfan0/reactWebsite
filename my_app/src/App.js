import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Skills from './components/skills';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className = 'App'>
        <Header></Header>
      </div>
        <Skills></Skills>
    </Router>
  );
}

export default App;
