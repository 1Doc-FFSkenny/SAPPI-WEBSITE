//imports from react
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Imported Components from Components folder
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Ourstory from './Components/Ourstory';
import Projects from './Components/Projects';
import Updates from './Components/Updates';
import CoreValues from './Components/CoreValues';
import Executive from './Components/Executive';



const App = () => {
  return (
    <div className='App'>
      <Navbar />
      {/* Route Syntax: path="name of page in url" element={<imported component/>} */}
      <Routes>
        {/* Home page Route */}
        <Route path='/' element={<Home />} />
        {/* Contact page Route */}
        <Route path='/contact' element={<Contact />} />
        {/* Our Story page Route */}
        <Route path='/ourstory' element={<Ourstory />} />
        {/* Projects page Route */}
        <Route path='/projects' element={<Projects />} />
        {/* Updates page Route */}
        <Route path='/updates' element={<Updates />} />
        {/* Core Values page Route */}
        <Route path='/corevalues' element={<CoreValues />} />
        {/* Executives page Route */}
        <Route path='/executives' element={<Executive />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
