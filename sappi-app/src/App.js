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





const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/ourstory' element={<Ourstory/>} />
        <Route  path='/projects' element={<Projects/>} />
        <Route  path='/updates' element={<Updates />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
