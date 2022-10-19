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



const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
